import React,{ Fragment,useState } from 'react';
 
const Login = () => {

    const [formData, setFormData ] = useState({
       name: '',
       email: '',
       password: '',
       password2: '',
    });

    const {email,password,password2 } = formData;

    const onChange = e => setFormData({
      ...formData,
       [e.target.name]: e.target.value
    })

    const onSubmit = e =>  {

      e.preventDefault();

      if(password !== password2){
        console.log("password doesn't match");
      } else {
        console.log(formData);
      }
    }
   return (
     <Fragment>
       <h1 className="large text-primary">Sign In</h1>

      <form className="form" onSubmit={e => onSubmit(e) }>
        <div className="form-group">
          <input type="email" 
          placeholder="Email Address" 
          value={email}
          onChange={e => { onChange(e) } }
          name="email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={e => { onChange(e) } }
            value={password}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="/register">Sign Up</a>
      </p>
     </Fragment>
    )
}
 
export default Login