import { Link } from 'react-router-dom';
import '../RegistrationPage/RegistrationPage.css';

export default function Login() {
  return (
    <form className="login_page">
      <h1>Log in </h1>
      <div className="signupCard">
        <h2>Enter your info here</h2>
        <div className="login_pwd">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <button>Login</button>

      <p>
        Don't have an account? <Link to="/">signup</Link>
      </p>
    </form>
  );
}