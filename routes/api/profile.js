const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');  
const User = require('../../models/User');    
const { check,validationResult } = require('express-validator');

//@route GET  api/profile/me
router.get('/me',auth,
async (req,res) => {
console.log(req.user.id);

    try{
        const profile = await Profile.findOne({ user : req.user.id }).
        populate('user',['name,avatar']);
         if(!profile){
            return res.status(400).json({ errors: [{ msg: 'Invalid Profile'}]})
         }
        res.json(profile);
    } catch(error) {
        res.status(500).json({msg:error});
    }
});


//@route GET  api/profile/tushar
router.get('/tushar',
async (req,res) => {

    try{
        const profile = await Profile.findOne({ user : '5db52019fa314e2586704336' }).
        populate('user',['name']);
         if(!profile){
            return res.status(400).json({ errors: [{ msg: 'Invalid Profile'}]})
         }
        res.json(profile);
    } catch(error) {
        res.status(500).json({msg:error});
    }
});
//@route GET  api/profile/
//@desc  Create or update profile

router.post('/', 
[ auth,
    [
    check('status','Status is requires').not().isEmpty(),
    check('skills','Skills are required').not().isEmpty()
   ]
], 
  async (req,res) => {
      const errors = validationResult(req);
      console.log("errors",errors);
    if(!errors.isEmpty()){
     return res.status(400).json({ errors: errors.array()});
    }

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    // Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
        profileFields.skills = req.body.skills.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    console.log(profileFields);

    try{
      let profile = await Profile.findOne({user: req.user.id});

      if(profile){
          //update
          profile = await Profile.findOneAndUpdate({
                user:req.user.id,
                $set: profileFields,
                new: true
            });
         return res.json(profile);   
      }
      console.log('create');
      //create
        profile =  new Profile(profileFields);
        await profile.save();
        res.json(profile);

    } catch(err) {
      console.error(err.stack,err.lineNumber);
    }
});

//@route GET  api/profile/all
//@desc  Create all profiles
//@access public
router.get('/all',async(req, res) => { 
    try {
        const profiles = await Profile.find().populate('user',['name','avatar']);
        console.log(profiles);
        res.json(profiles);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route GET  api/profile/user/:user_id
//@desc  Get profile by user_id
//@access public
router.get('/user/:user_id',async(req, res) => {  
    try {
        const profile = await Profile.findOne({ user: req.params.user_id}).populate('user',['name','avatar']);

        if(!profile){
            return res.status(400).json({ msg: 'Profile not found'});
        }
        res.json(profile);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route DELETE  api/profile
//@desc  Get profile ,user, posts
//@access Private
router.delete('/',auth,async(req, res) => {    
    try {
        //Remove profile
         await Profile.findOneAndRemove({ user: req.user_id});
         await User.findOneAndRemove({ _id: req.user_id});

        
        res.json({ msg : 'User deleted'});
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put(
    '/experience',
    [
      auth,
      [
        check('title', 'Title is required')
          .not()
          .isEmpty(),
        check('company', 'Company is required')
          .not()
          .isEmpty(),
        check('from', 'From date is required')
          .not()
          .isEmpty()
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      } = req.body;
  
      const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      };
  
      try {
        const profile = await Profile.findOne({ user: req.user.id });
  
        profile.experience.unshift(newExp);
  
        await profile.save();
  
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  router.delete('/experience/:exp_id', auth, async (req, res) => {
    try {
      const foundProfile = await Profile.findOne({ user: req.user.id });
      const expIds = foundProfile.experience.map(exp => exp._id.toString());
      // if i dont add .toString() it returns this weird mongoose coreArray and 
      //the ids are somehow objects and it still deletes anyway even 
      //if you put /experience/5
      
      const removeIndex = expIds.indexOf(req.params.exp_id);
      if (removeIndex === -1) {
        return res.status(500).json({ msg: "Server error" });
      } else {
        // theses console logs helped me figure it out
        console.log("expIds", expIds);
        console.log("typeof expIds", typeof expIds);
        console.log("req.params", req.params);
        console.log("removed", expIds.indexOf(req.params.exp_id));
        foundProfile.experience.splice(removeIndex, 1);
        await foundProfile.save();
        return res.status(200).json(foundProfile);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Server error" });
    }
  });

  // @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree is required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Field of study is required')
        .not()
        .isEmpty(),
      check('from', 'From date is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const foundProfile = await Profile.findOne({ user: req.user.id });
    const eduIds = foundProfile.education.map(edu => edu._id.toString());
    // if i dont add .toString() it returns this weird mongoose coreArray and the ids are somehow objects and it still deletes anyway even if you put /education/5
    const removeIndex = eduIds.indexOf(req.params.edu_id);
    if (removeIndex === -1) {
      return res.status(500).json({ msg: "Server error" });
    } else {
      // theses console logs helped me figure it out
      /*   console.log("eduIds", eduIds);
      console.log("typeof eduIds", typeof eduIds);
      console.log("req.params", req.params);
      console.log("removed", eduIds.indexOf(req.params.edu_id));
 */ foundProfile.education.splice(
        removeIndex,
        1,
      );
      await foundProfile.save();
      return res.status(200).json(foundProfile);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

