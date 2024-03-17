import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FormLogin, FormRegister, OverlayForm } from "../../molecules";
import '../../../styles/auth/auth.css'

const Form = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()
  const pathnameUrl = location.pathname
  const checkPathname = pathnameUrl.substring(1)

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

  useEffect(() => {
    if (checkPathname === "login") {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }, [checkPathname])

  return (
    <div className={signUpClasses}>
      <FormRegister />
      <FormLogin />
      <OverlayForm onSignIn={handleSignIn} onSignUp={signUp}/>
    </div>
  );
};

export default Form;
