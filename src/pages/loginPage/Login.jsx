import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { saveToken } from "../../utils";
import "../RegistrationPage/RegistrationPage.css";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };

    setIsLoading(true);
    setError("");
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate("/homepage");
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        setError("Invalid username or passeword");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="login_page" onSubmit={handleSubmit}>
      <h1>Log in </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="signupCard">
        <h2>Enter your info here</h2>
        <div className="login_pwd">
          <input type="text" placeholder="email" name="emailAddress" required />
          <input type="text" placeholder="Password" name="password" />
        </div>
      </div>
      <button>Login</button>

      <p>
        Don't have an account? <Link to="/">signup</Link>
      </p>
    </form>
  );
}