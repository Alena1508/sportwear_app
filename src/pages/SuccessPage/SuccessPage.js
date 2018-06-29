import { Link } from 'react-router-dom';

export const SuccessPage = () => (
  <div className="success">
    <p>Thank you for your registration!!!!</p>
    <Link to="/login">Login</Link>
  </div>
);
