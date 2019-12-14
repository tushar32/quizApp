import React, { useState, Fragment, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from '../../actions/profile';
 
const EditProfile = ({  profile: { profile, loading },createProfile, getCurrentProfile, history }) => {

  
    const [formData, setFormData ] = useState({
        company: "",
        website: "",
        location: "",
        status: "",
        skills: "",
        githubusername: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        instagram: "",
        top_skills: [{ title:'' ,description:''}]
     });

     useEffect(() => {
      getCurrentProfile(); 
     
      setFormData({
        company: loading || !profile.company ? '' : profile.company,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        status: loading || !profile.status ? '' : profile.status,
        skills: loading || !profile.skills ? '' : profile.skills.join(','),
        githubusername:
          loading || !profile.githubusername ? '' : profile.githubusername,
        bio: loading || !profile.bio ? '' : profile.bio,
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        youtube: loading || !profile.social ? '' : profile.social.youtube,
        instagram: loading || !profile.social ? '' : profile.social.instagram,
        top_skills: loading || !profile.top_skills ? [{ title:'' ,description:''}] : profile.top_skills
      });
      console.log(top_skills);
  
  }, [loading, getCurrentProfile]);

     const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
        top_skills
    } = formData;

   const [ displaySocialInput, ToggleSocialInput ] = useState(false);

   const onChange = e => setFormData({
    ...formData,
     [e.target.name]: e.target.value
  })
  console.log('top_skills',top_skills);

  const onSubmit = e =>  {
    e.preventDefault();
    formData.top_skills = top_skills;
    createProfile(formData, history,true)
 }

 const AddTop5Skills = ()  => {
  
   if(top_skills.length >= 5)
    return;

  const new_Skills = [...top_skills,{title:'',description:''}];
    setFormData({
      ...formData,
      top_skills:new_Skills
    })
  }

  function handleChange(e) {
    let updateSkills = [...top_skills];
    // this will map the exact skill fields 
    updateSkills[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
    
    setFormData({
      ...formData,
      updateSkills
    })
  }

   return (
      <Fragment>
        <h1 className="large text-primary">
        Create Your Portfolio
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        portfolio stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e) }>

      {top_skills.map((value,idx) => {
        const titleId = `title-${idx}`;
        const descId = `description-${idx}`;

        return (
          <div key={`title-${idx}`}>        
            <div className="form-group social-input">
                <input type="text" data-idx={idx} name={titleId} data-name="title"  
                placeholder="Name of Skill" value={top_skills[idx].title}
                onChange={handleChange }/>
                <textarea placeholder="A Short Description" data-name="description" 
                name={ descId} data-idx={idx} value={top_skills[idx].description}
                onChange={handleChange }></textarea>
            </div>
          </div>
        );
       })
      }
        <button type="button" onClick = {AddTop5Skills} className="btn btn-light">
              Add Top 5 SKills
            </button>

        <div className="form-group">
          <select name="status" value={status} 
          onChange={e => onChange(e) } >
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">Give us an idea of where you are at in your career</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} 
          onChange={e => onChange(e) }/>
          <small className="form-text">Could be your own company or one you work for</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" value={website} 
          onChange={e => onChange(e) }/>
          <small className="form-text">Could be your own or a company website</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} 
          onChange={e => onChange(e) }/>
          <small className="form-text">City & state suggested (eg. Boston, MA)</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Top 5 Skills" name="skills" value={skills} 
          onChange={e => onChange(e) }/>
          <small className="form-text">Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"value={githubusername} 
            onChange={e => onChange(e) }
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"  value={bio} 
          onChange={e => onChange(e) }></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

         <div className="my-2">
          <label> Top 5 Technical Skills </label>
        </div>

        

        <div className="my-2">
          <button type="button" onClick = { () => { ToggleSocialInput(!displaySocialInput) } } className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
    { displaySocialInput && 
        <Fragment>
        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} 
          onChange={e => onChange(e) }/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} 
          onChange={e => onChange(e) }/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} 
          onChange={e => onChange(e) }/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} 
          onChange={e => onChange(e) }/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} 
          onChange={e => onChange(e) }/>
        </div>
        
        </Fragment> 
    }
         <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
        </form>
      </Fragment>
    );
}

 EditProfile.propTypes = {
     createProfile : PropTypes.func.isRequired,
     getCurrentProfile : PropTypes.func.isRequired,
     profile: PropTypes.object.isRequired
 }

 const mapStateToProps = state => ({
   profile: state.profile
 });

 //connect('states that are uses as a prop in a component','action fucntion need to call')
export default connect(mapStateToProps,{ createProfile, getCurrentProfile }) (withRouter(EditProfile));