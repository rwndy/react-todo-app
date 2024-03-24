import { ReactNode, FC} from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { getCookie } from '../../../lib/cookies'

type ProtectedRouteProps = {
  children: ReactNode
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isLogin = getCookie('isLogin');
  const location = useLocation()
  
  if (isLogin === 'true') {
    return <Navigate to="/dashboard" replace state={{from: location}}/>
  }
  
  return <>{children}</>
};

export default ProtectedRoute