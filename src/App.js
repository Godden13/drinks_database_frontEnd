import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/RegistrationPage/RegistrationPage';
import Login from './pages/loginPage/Login';
import HomePage from './pages/HomePage/HomePage';
import Loading from './pages/LandingPage/LoadingPage';
import Profile from './pages/ProfilePage/ProfilePage';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { DrinkContext } from './api/drinksContext';
import CRUD from './pages/CRUD/CRUD';
import Drinks from './pages/CRUD/NestedRoutes/Drinks/Drinks';
import Categories from './pages/CRUD/NestedRoutes/Categories/Categories';
import Ingredients from './pages/CRUD/NestedRoutes/Ingredients/Ingredients';
import { getDrinks } from './api/drinksAuth';
import { getGlasses } from './api/glasses';
import { getIngredients } from './api/ingredient';
import { getCategories } from './api/categories';

function App() {
  const [drinks, setDrinks] = useState();
  const [ingredients, setIngredients] = useState();
  const [categories, setCategories] = useState();
  const [glasses, setGlasses] = useState();

  useEffect(() => {
    getDrinks().then((data) => {
      setDrinks([...data]);
    }).catch(() => {
      return { status: 401 };
    });

    getGlasses()
      .then((data) => {
        setGlasses([...data]);
      })
      .catch(() => {
        return { status: 401 };
      });

    getIngredients()
      .then((data) => {
        setIngredients([...data]);
      })
      .catch(() => {
        return { status: 401 };
      });

    getCategories()
      .then((data) => {
        setCategories([...data]);
      })
      .catch(() => {
        return { status: 401 };
      });
  }, [])

  return (
    <div className="App">
      <DrinkContext.Provider value={{ drinks, ingredients, categories, glasses}}>
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
