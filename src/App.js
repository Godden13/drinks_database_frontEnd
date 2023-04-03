import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/RegistrationPage/RegistrationPage';
import Login from './pages/loginPage/Login';
import HomePage from './pages/HomePage/HomePage';
import Loading from './pages/LandingPage/LoadingPage';
import Profile from './pages/ProfilePage/ProfilePage';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getCategories, getDrinks, getGlasses, getIngredients } from './api/auth';
import { DrinkContext } from './api/drinksContext';
import CRUD from './pages/CRUD/CRUD';
import Drinks from './pages/CRUD/NestedRoutes/Drinks/Drinks';
import Categories from './pages/CRUD/NestedRoutes/Categories/Categories';
import Ingredients from './pages/CRUD/NestedRoutes/Ingredients/Ingredients';

function App() {
  const [drink, setDrink] = useState();
  const [ingredient, setIngredient] = useState();
  const [category, setCategory] = useState();
  const [glass, setGlass] = useState();

  useEffect(() => {
    getDrinks().then((data) => {
      setDrink(data);
    }).catch(() => {
      return { status: 401 };
    });

    getGlasses()
      .then((data) => {
        setGlass(data);
      })
      .catch(() => {
        return { status: 401 };
      });

    getIngredients()
      .then((data) => {
        setIngredient(data);
      })
      .catch(() => {
        return { status: 401 };
      });

    getCategories()
      .then((data) => {
        setCategory(data);
      })
      .catch(() => {
        return { status: 401 };
      });
  }, [])

  return (
    <div className="App">
      <DrinkContext.Provider value={{ drink, ingredient, category, glass}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Loading />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/crud' element={<CRUD />}>
              <Route path='drinks' element={<Drinks />} />
              <Route path='categories' element={<Categories />} />
              <Route path='ingredients' element={<Ingredients />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DrinkContext.Provider>
    </div>
  );
}

export default App;
