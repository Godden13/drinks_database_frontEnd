import { Link } from "react-router-dom";
import AuthGaurd from "../../components/AuthGaurd";
import "./HomePage.css";

function HomePage({ user }) {
  return (
    <div className="homepage">
      <h1>Welcome to the home page</h1>
      <p>
        {user?.firstName} {user?.lastName}H
      </p>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default AuthGaurd(HomePage);
