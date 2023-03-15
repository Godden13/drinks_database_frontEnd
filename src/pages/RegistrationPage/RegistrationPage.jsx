import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import "./RegistrationPage.css";

export default function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [passFail, setPassFail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.email.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirm: target.password.value,
    };
    setIsLoading(true);
    if (target.password.value === target.passwordConfirmation.value) {
      await register(data);
      setIsLoading(false);
      navigate("/login");
    }else {
      setPassFail('The password doesnt match')
    }
  }

  return (
    <form className="registration" onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <p>{isLoading ? "Loading..." : ""}</p>
      <div className="signupCard">
        <h2>First name</h2>
        <input type="text" placeholder="first name" name="firstName" required />
      </div>
      <div className="signupCard">
        <h2>Last name</h2>
        <input type="text" placeholder="last name" name="lastName" required />
      </div>
      <div className="signupCard">
        <h2>Email</h2>
        <input type="email" placeholder="email" name="email" required />
      </div>
      <div className="signupCard">
        <h2>Phone number</h2>
        <input type="phone" placeholder="phone" name="phone" required />
      </div>
      <div className="signupCard">
        <h2>Enter your 8 digit password</h2>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>
      <div className="signupCard">
        <h2>Enter your password again</h2>
        <input
          type="password"
          placeholder="Password"
          name="passwordConfirmation"
          required
        />
      </div>
      {passFail && <p className="error">{passFail}</p>}

      <button>Register</button>
      <p>
        Already have an account? <Link to="/login">login</Link>
      </p>
    </form>
  );
}
