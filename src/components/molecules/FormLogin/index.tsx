import { ChangeEvent, FormEvent } from "react";
import { Input, Button, Title } from "../../atoms"

type FormLoginProps = {
  email: string
  password: string
  onSignIn: (event: FormEvent<HTMLButtonElement>) => void
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormLogin = ({ email, password, onSignIn, onChangeInput }: FormLoginProps) => {
  return (
    <div className="form-container sign-in-container">
      <form>
        <Title title="Sign In" className="form-title"/>
        <Input type="email" placeholder="Email" name="email" value={email} onChange={onChangeInput}/>
        <Input type="password" placeholder="Password" name="password" value={password} onChange={onChangeInput}/>
        <a href="/#">Forget Password?</a>
        <Button onClick={onSignIn} className="btn-form">Sign In</Button>
      </form>
    </div>
  )
}

export default FormLogin