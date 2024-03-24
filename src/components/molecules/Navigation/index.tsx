import { useNavigate } from "react-router-dom";

import { Title, Button } from "../../atoms";

import { getCookie, eraseCookie } from "../../../lib/cookies";

const Navigation = () => {
  const isLogin = getCookie("isLogin");
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isLogin) {
      navigate("/login");
      eraseCookie("isLogin");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="nav">
      <Title className="nav-title" title="DearDaily" />
      <Button className="nav-login" onClick={handleAuth}>
        {isLogin ? "Logout" : "Login"}{" "}
      </Button>
    </nav>
  );
};

export default Navigation;
