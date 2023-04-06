import { useContext } from "react";
import { DrinkContext } from "../../api/drinksContext";
import "./SideBar.css";

export default function SideBar() {
  const {categories, ingredients, glasses, drinks} = useContext(DrinkContext)
  return (
    <div className="sideBar">
      <div className="categories">
        <h2>Categories</h2>
        {categories?.map((category) => {
          return(
            <label htmlFor={category.name} className="catList" key={category.id}>
              <input type="checkbox" id={category.name} />
              <p>{category.name}</p>
            </label>
          )
        })}
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        {ingredients?.map((ingredient) => {
          return (
            <label htmlFor={ingredient.name} className="ingList" key={ingredient.id} id={ingredient.name}>
              <input type="checkbox" name={ingredient.name} id={ingredient.name} />
              <p>{ingredient.name}</p>
            </label>
          );
        })}
      </div>
      <div className="glassList">
        <h2>Glass List</h2>
        {glasses?.map((glass)=> {
          return (
            <label htmlFor={glass.name} className="glassList">
              <input type="checkbox" name={glass.name} id={glass.name} />
              <p>{glass.name}</p>
            </label>
          );
        })}
      </div>
      <div className="alcoholic">
        <h2>Alcoholic</h2>
        {drinks.is_alcoholic}
      </div>
    </div>
  )
}