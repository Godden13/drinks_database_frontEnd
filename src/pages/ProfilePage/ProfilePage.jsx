import AuthGuard from '../../components/AuthGaurd';
import { FaEdit, FaUserCircle } from "react-icons/fa";
import './ProfilePage.css';

function Profile({user}){
  return (
    <form className="profile">
      <h1>My Profile</h1>
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
            />
          </div>
          <div className="signupCard">
            <h2>Last Name</h2>
            <input
              type="text"
              placeholder="update your last name"
              defaultValue={user?.lastName}
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
      {/* <button type='button' onClick={handleUpdate}>edit</button> */}
    </form>
  );
}

export default AuthGuard(Profile);