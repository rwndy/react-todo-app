import { Link } from "react-router-dom";

import { Title, Button } from "../../atoms";

const Navigation = () => {
  return (
    <nav className="nav">
      <div />
      <Title className="nav-title" title="DearDaily" />

      <Link to={"/login"}>
        <Button className="nav-login">Login</Button>
      </Link>
    </nav>
  );
};

export default Navigation;
