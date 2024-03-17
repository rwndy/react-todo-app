import { Button, Title } from "../../atoms"

type OverlayFormProps = {
  onSignIn: () => void
  onSignUp: () => void
}

const OverlayForm = ({ onSignIn, onSignUp }: OverlayFormProps) => {
  return (
    <div className="overlay-container">
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <Title className="overlay-title" title="Welcome Back!" />
        <p className="form-content">
          To keep connected with us please login with your personal info
        </p>
        <Button className="ghost btn-form" onClick={onSignIn}>
          Sign In
        </Button>
      </div>
      <div className="overlay-panel overlay-right">
      <Title className="overlay-title" title="Hello Friend!" />
        <p className="form-content">Enter your personal details and start journey with us</p>
        <Button className="ghost btn-form" onClick={onSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  </div>
  )
}

export default OverlayForm