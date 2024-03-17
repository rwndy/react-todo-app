import React from "react";
import { Input, Button } from "../../atoms";

const FormRegister = () => {
  return (
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default FormRegister;
