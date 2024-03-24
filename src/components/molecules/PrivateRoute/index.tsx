import { ReactNode, FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../../lib/cookies';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isLogin = getCookie('isLogin');
  const location = useLocation();

  if (isLogin !== 'true') {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
