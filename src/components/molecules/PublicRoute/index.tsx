import { ReactNode, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../../lib/cookies';

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const isLogin = getCookie('isLogin');

  if (isLogin === 'true') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;