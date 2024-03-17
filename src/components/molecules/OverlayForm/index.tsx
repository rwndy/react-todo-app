import { Button } from "../../atoms"

type OverlayFormProps = {
  onSignIn: () => void
  onSignUp: () => void
}

const OverlayForm = ({ onSignIn, onSignUp }: OverlayFormProps) => {
  return (
    <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>
          To keep connected with us please login with your personal info
        </p>
        <Button className="ghost" onClick={onSignIn}>
          Sign In
        </Button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <Button className="ghost" onClick={onSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  </div>
  )
}

export default OverlayForm