import { useState, useEffect, ChangeEvent, FormEvent} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { FormLogin, FormRegister, OverlayForm } from "../../molecules";
import '../../../styles/auth/auth.css'

import { setCookie } from "../../../lib/cookies";

type Login = {
  email: string
  password: string
}

const Form = () => {
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState<Login>({ email: '', password: '' })


  const navigate = useNavigate()
  const location = useLocation()
  const pathnameUrl = location.pathname
  const checkPathname = pathnameUrl.substring(1)

  const signUp = () => {
    navigate('/register')
    setToggle(true);
  };

  const handleSignIn = () => {
    navigate('/login')
    setToggle(false)
  }

  const signUpClasses = ["container", toggle ? "right-panel-active" : ""].join(
    " "
  );

  const onSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!form.email && !form.password) {
     return
    } else {
      setCookie('isLogin', 'true', 7)
      navigate('/dashboard')
    }
  }

  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value
  });
  }

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
      <FormLogin 
        email={form.email}
        password={form.password}
        onSignIn={onSubmit}
        onChangeInput={handleChangeForm}
      />
      <OverlayForm onSignIn={handleSignIn} onSignUp={signUp}/>
    </div>
  );
};

export default Form;
