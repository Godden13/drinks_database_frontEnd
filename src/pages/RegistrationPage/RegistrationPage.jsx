import { Link } from 'react-router-dom';
import './RegistrationPage.css';

export default function Registration() {
  return (
    <form className="registration">
        <h1>Registration</h1>
        <div className="signupCard">
          <h2>First name</h2>
          <input type="text" placeholder="first name" />
        </div>
        <div className="signupCard">
          <h2>Last name</h2>
          <input type="text" placeholder="last name" />
        </div>
        <div className="signupCard">
          <h2>Email</h2>
          <input type="email" placeholder="email" />
        </div>
        <div className="signupCard">
          <h2>Phone number</h2>
          <input type="phone" placeholder="phone" />
        </div>
        <div className="signupCard">
          <h2>Enter your 8 digit password</h2>
          <input type="password" placeholder="Password" />
        </div>
        <div className="signupCard">
          <h2>Enter your password again</h2>
          <input type="password" placeholder="Password" />
        </div>
        <button>Register</button>
        <p>Already have an account? <Link to="login">login</Link></p>
    </form>
  );
}