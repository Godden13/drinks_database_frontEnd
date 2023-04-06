import { useContext } from "react";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import {
  deleteCategory,
  registerCategories,
  updateCurrentCategory,
} from "../../../../api/categories";
import { DrinkContext } from "../../../../api/drinksContext";
import "./Categories.css";

export default function Categories() {
  const [addInfo, setAddInfo] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  const [updateCat, setUpdateCat] = useState();

  const { categories } = useContext(DrinkContext);

  const toggleModal = () => {
    setAddInfo(!addInfo);
  };

  const toggleEditModal = () => {
    setEditInfo(!editInfo);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const data = {
      name: target.category_name.value,
      description: target.description.value.toString,
    };
    await registerCategories(data);
    toggleModal();
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    const value = { id: updateCat.id, ...values };
    await updateCurrentCategory(value);
    toggleEditModal();
  };

  return (
    <div className="InputData">
      <div className="CategoryData">
        <div id="add" className="crudData" onClick={toggleModal}>
          <FaPlusCircle className="addItem" />
        </div>
        {categories?.map((category) => {
          return (
            <div className="crudData" key={category.id}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <div className="crudBtn">
                <button
                  className="crudBtnItem"
                  id="crudEdit"
                  onClick={() => {
                    setUpdateCat(category);
                    toggleEditModal();
                  }}
                >
                  Edit
                </button>
                <button
                  className="crudBtnItem"
                  id="crudDelete"
                  onClick={() => {
                    deleteCategory(category);
                  }}
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
            <button type="button" className="close" onClick={toggleModal}>
              X
            </button>
          </form>
        </div>
      )}

      {editInfo && (
        <div className="modal">
          <div className="overLay"></div>
          <form className="addData" onSubmit={handleUpdate}>
            <h2>Edit a category</h2>
            <div className="signupCard">
              <h2>Name</h2>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={updateCat?.name}
                required
              />
            </div>
            <div className="signupCard">
              <h2>Description</h2>
              <input
                type="text"
                placeholder="description"
                name="description"
                defaultValue={updateCat?.description}
                required
              />
            </div>
            <button type="submit">Add</button>
            <button type="button" className="close" onClick={toggleEditModal}>
              X
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
