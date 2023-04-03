import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { registerCategories } from '../../../../api/auth';
import './Categories.css'

export default function Categories() {
    const [addInfo, setAddInfo] = useState(false);

      const toggleModal = () => {
        setAddInfo(!addInfo);
      };

      async function handleSubmit(e) {
        e.preventDefault();
        const {target} = e
        const data = {
          name: target.category_name.value,
          description: target.description.value,
        };

        await registerCategories(data)
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
            <h2>Add a category</h2>
            <div className="signupCard">
              <h2>Category name</h2>
              <input
                type="text"
                placeholder="category_name"
                name="category_name"
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
            <button type="submit">Add</button>
            <button type='button' className="close" onClick={toggleModal}>
              X
            </button>
          </form>
        </div>
      )}
    </div>
  );
}