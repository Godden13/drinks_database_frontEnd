import { useState, useContext } from "react";
import { FaPlusCircle } from 'react-icons/fa';
import { deleteCurrentDrink, registerDrinks, updateCurrurrentDrink } from '../../../../api/drinksAuth';
import { DrinkContext } from '../../../../api/drinksContext';
import './Drinks.css';

export default function Drinks() {
  const [addInfo, setAddInfo] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  // const [updateDrink, setUpdateDrink] = useState();
  const {drinks} = useContext(DrinkContext);

  const toggleModal = () => {setAddInfo(!addInfo)};
  const toggleEditModal = () => {setEditInfo(!editInfo)};

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      id: drinks.id,
      name: target.name.value,
      description: target.description.value,
      imageUrl: target.image_url.value,
      recipe: target.recipe.value,
    };
    console.log(data);
    await updateCurrurrentDrink(data);
    toggleEditModal();
  };

  return (
    <div className="InputData">
      <div className="drinkData">
        <div id="add" className="crudData" onClick={toggleModal}>
          <FaPlusCircle className="addItem" />
        </div>
        {drinks?.map((drink) => {
          return (
            <div className="crudData" key={drink.id}>
              <img src={drink.imageUrl} alt="drink_image" />
              <h3>{drink.name}</h3>
              <p>{drink.description}</p>
              <div className="crudBtn">
                <button
                  className="crudBtnItem"
                  id="crudEdit"
                  onClick={() =>{
                    toggleEditModal()
                  }}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="crudBtnItem"
                  id="crudDelete"
                  onClick={() => deleteCurrentDrink(drink)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

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
              <h2>Category ID</h2>
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
            <button type="button" className="close" onClick={toggleModal}>
              X
            </button>
          </form>
        </div>
      )}

      {editInfo && (
        <div className="modal">
          <div className="overLay">
            <form className="addData" onSubmit={handleUpdate}>
              <div className="signupCard">
                <h2>Name</h2>
                <input
                  type="text"
                  placeholder='name'
                  name="name"
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
                <h2>Description</h2>
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  required
                />
              </div>
              <button type="submit" className="modify">
                Modify
              </button>
              <button type="button" className="close" onClick={toggleEditModal}>
                X
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}