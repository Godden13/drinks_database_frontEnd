import { useContext } from 'react';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { DrinkContext } from '../../../../api/drinksContext';
import { deleteingredient, registerIngredient } from '../../../../api/ingredient';
import './Ingredients.css';

export default function Ingredients() {
     const [addInfo, setAddInfo] = useState(false);

     const {ingredients} = useContext(DrinkContext)

     const toggleModal = () => {
       setAddInfo(!addInfo);
     };

     const handleSubmit = async (e)=>{
      e.preventDefault();
      const { target } = e;
      const data = {
        name: target.ingredient_name.value,
        description: target.description.value,
      }
        if(!data){
          return {sendStatus: 'error'}
        }else {
          await registerIngredient(data)
          toggleModal()
        }

     }

     return (
       <div className="InputData">
         <div className="ingredientData">
           <div id="add" className="crudData" onClick={toggleModal}>
             <FaPlusCircle className="addItem" />
           </div>
           {ingredients?.map((ingredient) => {
            return (
              <div className="crudData" key={ingredient.id}>
                <h3>{ingredient.name}</h3>
                <p>{ingredient.description}</p>
                <div className="crudBtn">
                  <button className="crudBtnItem" id="crudEdit">Edit</button>
                  <button className="crudBtnItem" id="crudDelete" onClick={() => {deleteingredient(ingredient)}}>Delete</button>
                </div>
              </div>
            )
           })}
         </div>
         {addInfo && (
           <div className="modal">
             <div className="overLay"></div>
             <form className="addData" onSubmit={handleSubmit}>
               <h2>Add an Ingredient</h2>
               <div className="signupCard">
                 <h2>Ingredient name</h2>
                 <input
                   type="text"
                   placeholder="ingredient_name"
                   name="ingredient_name"
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
               <button type="submit" className="add">
                 Add
               </button>
               <button type="button" className="close" onClick={toggleModal}>
                 X
               </button>
             </form>
           </div>
         )}
       </div>
     );
}