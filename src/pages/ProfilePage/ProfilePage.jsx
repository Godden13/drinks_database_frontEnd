import AuthGuard from '../../components/AuthGaurd';
import { FaEdit, FaUserCircle } from "react-icons/fa";
import './ProfilePage.css';
import { useState } from 'react';
import { updateCurrentUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Profile({user}){
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { target } = e;
        const data = {
          id: user.id,
          firstName: target.firstName.value,
          lastName: target.lastName.value,
          phone: target.phone.value,
        };
    console.log(data)
    setIsLoading(true);
    await updateCurrentUser( data );
    setIsLoading(false);
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
    window.location.reload(true);
  }

  return (
    <form className="profile" onSubmit={handleUpdate}>
      <h1>My Profile</h1>
      <p>{isLoading ? "Loading..." : ""}</p>
      <div className="profileInfo">
        <div className="profile_page_info">
          <div id="image">
            <div className="image" title="change profile picture">
              <FaUserCircle className="userIcon" />
              <FaEdit className="userIcon1" />
            </div>
          </div>
          <div className="signupCard">
            <h2>First Name</h2>
            <input
              type="text"
              placeholder="update your name"
              defaultValue={user?.firstName}
              name="firstName"
            />
          </div>
          <div className="signupCard">
            <h2>Last Name</h2>
            <input
              type="text"
              placeholder="update your last name"
              defaultValue={user?.lastName}
              name="lastName"
            />
          </div>
          <div className="signupCard">
            <h2>Email</h2>
            <input
              type="text"
              placeholder="update your email"
              value={user?.emailAddress}
              disabled
            />
          </div>
          <div className="signupCard">
            <h2>Phone number</h2>
            <input
              type="text"
              placeholder="update your phone number"
              defaultValue={user?.phone}
              name="phone"
            />
          </div>
          <div className="signupCard">
            <h2>api-key</h2>
            <input
              type="text"
              placeholder="update your phone number"
              defaultValue={user?.apiKey}
              disabled
            />
          </div>
        </div>
      </div>
      <button type="submit">Update</button>
      <button type='button' onClick={logout}>logout</button>
    </form>
  );
}

export default AuthGuard(Profile);