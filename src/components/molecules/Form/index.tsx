import { useState } from 'react';

import './form.css'

const Form = () => {
  const [toggle, setToggle] = useState(false);

  const signUp = () => {
    setToggle(prevToggle => !prevToggle);
  };

  const signUpClasses = ['container', toggle ? 'right-panel-active' : ''].join(' ');

  return (
    <div className={signUpClasses}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="/#">Forget Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={signUp}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
