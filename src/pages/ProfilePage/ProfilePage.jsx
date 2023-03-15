import AuthGaurd from '../../components/AuthGaurd';
import './ProfilePage.css';

function Profile({user}){
  return (
    <form className="profile">
      Here is your information
      <div className="profilePic">
        <img
          src="https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png"
          alt="profileImage"
          id="profileImage"
        />
      </div>
      <div className="profile_page_info">
        <input type="text" placeholder="update your name" defaultValue={user?.firstName} />
        <input type="text" placeholder="update your last name" defaultValue={user?.lastName}/>
        <input type="text" placeholder="update your email" value={user?.email} disabled />
        <input type="text" placeholder="update your phone number" defaultValue={user?.phone}/>
      </div>
      {/* <button type='button' onClick={handleUpdate}>edit</button> */}
    </form>
  );
}

export default AuthGaurd(Profile);