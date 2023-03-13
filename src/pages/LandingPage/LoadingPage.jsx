import { Link } from 'react-router-dom';
import '../RegistrationPage/RegistrationPage';

export default function Loading(){
  return (
    <form className="loadingPage">
      <h2>Welcome</h2>
    <Link to="/register">signup</Link>
      <p>Already have an account? <Link to="/login">login</Link></p>
    </form>
  );
}