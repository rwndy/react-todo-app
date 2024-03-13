import { Input, Button } from "../../atoms"

const FormLogin = () => {
  return (
    <form>
      <h1>Sign In</h1>
      <Input type="email" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
      <a href="/#">Forget Password?</a>
      <Button>Sign In</Button>
    </form>
  )
}

export default FormLogin