import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children, requiredRole }) => {
  console.log(user);
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  if(requiredRole && requiredRole!=user)
    return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
