import { useState } from "react";

import { FormLogin, FormRegister, OverlayForm } from "../../molecules";
import './form.css'

const Form = () => {
  const [toggle, setToggle] = useState(false);

  const signUp = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const signUpClasses = ["container", toggle ? "right-panel-active" : ""].join(
    " "
  );

  return (
    <div className={signUpClasses}>
      <FormRegister />
      <FormLogin />
      <OverlayForm onSignIn={signUp} onSignUp={signUp}/>
    </div>
  );
};

export default Form;
