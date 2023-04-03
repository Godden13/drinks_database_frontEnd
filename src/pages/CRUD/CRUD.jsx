import { useNavigate, Outlet } from "react-router-dom";
import "./CRUD.css";

export default function CRUD() {

  const navigate = useNavigate()

  return (
    <div className="crud">
      <h1>Admin Panel</h1>
      <h3>Add or modify Information</h3>
      <div className="info">
        <div className="infoCards" id="drinks" onClick={()=> navigate("drinks")}>
          <h5>Drinks</h5>
          <p>Click to show drinks</p>
        </div>
        <div
          className="infoCards"
          id="categories"
          onClick={()=> navigate("categories")}
        >
          <h5>Categories</h5>
          <p>Click to show the various categories</p>
        </div>
        <div
          className="infoCards"
          id="ingredients"
          onClick={() =>  {navigate("ingredients")}}
        >
          <h5>Ingredients</h5>
          <p>Click to show the various ingredients</p>
        </div>
      </div>
      
      <Outlet />
    </div>
  );
}