import React from "react";
import { Input, Button, Title } from "../../atoms";

const FormRegister = () => {
  return (
    <div className="form-container sign-up-container">
      <form>
        <Title className="form-title" title="Create Account"/>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default FormRegister;
