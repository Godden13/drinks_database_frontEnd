import { useContext } from 'react';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { registerDrinks } from '../../../../api/auth';
import { DrinkContext } from '../../../../api/drinksContext';
import './Drinks.css';

export default function Drinks() {
  const [addInfo, setAddInfo] = useState(false)
  const {drinks, categories} = useContext(DrinkContext);

  const toggleModal = () => {setAddInfo(!addInfo); };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const { target  } = e
    const data = {
      name: target.drinkname.value,
      description: target.description.value,
      imageUrl: target.image_url.value,
      recipe: target.recipe.value,
    }
     if(!data){
      return {sendstatus: 'Error'}
     }else { await registerDrinks(data)}
    toggleModal()
  }


  console.log(drinks)
  console.log(categories)

  return (
    <div className="InputData">
      <div id="add" className="crudData" onClick={toggleModal}>
        <FaPlusCircle className="addItem" />
      </div>

      {/* {drinks.map((drink) => {
        return (
          <div className="InputData">
            <img src={drink.imageUrl} alt="drink_image" />
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>

          </div>
        )
      })} */}


      {addInfo && (
        <div className="modal">
          <div className="overLay"></div>
          <form className="addData" onSubmit={handleSubmit}>
            <h2>Add a new drink</h2>
            <div className="signupCard">
              <h2>Drink name</h2>
              <input
                type="text"
                placeholder="drink name"
                name="drinkname"
                required
              />
            </div>
            <div className="signupCard">
              <h2>Description</h2>
              <input
                type="text"
                placeholder="description"
                name="description"
                required
              />
            </div>
            <div className="signupCard">
              <h2>Image URL</h2>
              <input
                type="text"
                placeholder="image URL"
                name="image_url"
                required
              />
            </div>
            <div className="signupCard">
              <h2>Recipe</h2>
              <input type="text" placeholder="recipe" name="recipe" required />
            </div>
            <div className="signupCard">
              <h2>ingredient ID</h2>
              <input
                type="text"
                placeholder="ingredient"
                name="ingredient"
                required
              />
            </div>
            <div className="signupCard">
              <h2>Category</h2>
              <input
                type="text"
                placeholder="category"
                name="image_url"
                required
              />
            </div>
            <div className="alcohol">
              <p>Is it alcoholic</p>
              <input type="checkbox" />
            </div>
            <button type="submit" className="crudBtn">
              Add
            </button>
            <button type='button' className="close" onClick={toggleModal}>
              X
            </button>
          </form>
        </div>
      )}
    </div>
  );
}