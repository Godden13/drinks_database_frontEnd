import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/RegistrationPage/RegistrationPage';
import Login from './pages/loginPage/Login';
import HomePage from './pages/HomePage/HomePage';
import Loading from './pages/LandingPage/LoadingPage';
import { DrinkContext } from './api/drinksContext';
import Profile from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <DrinkContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Loading />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </DrinkContext.Provider>
    </div>
  );
}

export default App;
