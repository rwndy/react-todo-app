import { Input, Button, Title } from "../../atoms"

const FormLogin = () => {
  return (
    <div className="form-container sign-in-container">
      <form>
        <Title title="Sign In" className="form-title"/>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <a href="/#">Forget Password?</a>
        <Button>Sign In</Button>
      </form>
    </div>
  )
}

export default FormLogin