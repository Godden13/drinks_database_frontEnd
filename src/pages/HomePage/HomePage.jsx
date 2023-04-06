import AuthGuard from "../../components/AuthGaurd";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.css";

function HomePage({ drinks, user }) {
  return (
    <div className="homepage">
      <SideBar />

      <h1>Welcome to the home page</h1>
      <p>
        {user?.firstName} {user?.lastName}
      </p>
      <div className="drinks">
        {drinks?.map((drink) => {
          return (
            <div className="drinks" key={drink.id}>
              <img src={drink.src} alt={drink.name} id="image" />
              <p>{drink.description}</p>
              <button className="readMore">Read More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AuthGuard(HomePage);
