import { Link, useNavigate } from 'react-router-dom';
import '../RegistrationPage/RegistrationPage';

export default function Loading(){
  const navigate = useNavigate();
  const toSignup = () => {
    navigate("/register");
  }
  return (
    <form className="loadingPage">
      <h2>Welcome</h2>
      <button onClick={toSignup}>signup</button>
      <p>
        Already have an account? <Link to="/login">login</Link>
      </p>
    </form>
  );
}