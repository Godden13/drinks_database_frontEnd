import { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api/auth";
import "./NavBar.css";

function NavBar() {
      const [user, setUser] = useState();
      const navigate = useNavigate();

      useEffect(() => {
        if (user) return;
        getCurrentUser()
          .then((user) => {
            setUser(user);
          })
      }, [user]);


    const logout = () => {
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
      window.location.reload(true);
    };

  return (
    <div className="nav">
      <div className="navInfo">
        {user?.is_admin && (
          <div className="user">
            <Link className="userLink" to="/crud">
              CRUD
            </Link>
          </div>
        )}

        {user ? (
          <div className="user">
            <a href="http://localhost:3000/api-docs" className="userLink">
              Docs
            </a>
            <Link className="userLink" to="/homepage">Home</Link>
            <Link to="/profile" className="userLink">
              Profile
            </Link>
            <Link onClick={logout} className="userLink">
              LogOut
            </Link>
          </div>
        ) : (
          <div className="user">
            <Link className="userLink" to="/register">
              Signup
            </Link>
            <Link className="userLink" to="/login">
              Login
            </Link>
          </div>
        )}
        {/* <FaUserCircle className="userPic" /> */}
      </div>
    </div>
  );
}

export default NavBar