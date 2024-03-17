import { Input, Button } from "../../atoms"

const FormLogin = () => {
  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign In</h1>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <a href="/#">Forget Password?</a>
        <Button>Sign In</Button>
      </form>
    </div>
  )
}

export default FormLogin