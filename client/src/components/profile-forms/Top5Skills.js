import React from 'react';
 
const Top5Skills = (props) => {
   return (
      <div>
        <div className="form-group social-input">
            <input type="text" placeholder="Skill 1" name="twitter" value='{}' 
            onChange={e => props.onChange(e) }/>
            <textarea placeholder="A Short Description" name="desciption"  value='{}' 
            onChange={e => props.onChange(e) }></textarea>
          </div>
      </div>
    )
}
 
export default Top5Skills