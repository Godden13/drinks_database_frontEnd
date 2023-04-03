import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { registerIngredients } from '../../../../api/auth';
import './Ingredients.css';

export default function Ingredients() {
     const [addInfo, setAddInfo] = useState(false);

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
          await registerIngredients(data)
        }

     }

     return (
       <div className="InputData">
         <div id="add" className="crudData" onClick={toggleModal}>
           <FaPlusCircle className="addItem" />
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
               <button className="add">Add</button>
               <button type='button' className="close" onClick={toggleModal}>
                 X
               </button>
             </form>
           </div>
         )}
       </div>
     );
}