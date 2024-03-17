import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormLogin, FormRegister, OverlayForm } from "../../molecules";
import '../../../styles/auth/auth.css'

const Form = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()

  const signUp = () => {
    navigate('/signup')
    setToggle(true);
  };

  const handleSignIn = () => {
    navigate('/login')
    setToggle(false)
  }


  const signUpClasses = ["container", toggle ? "right-panel-active" : ""].join(
    " "
  );

  return (
    <div className={signUpClasses}>
      <FormRegister />
      <FormLogin />
      <OverlayForm onSignIn={handleSignIn} onSignUp={signUp}/>
    </div>
  );
};

export default Form;
