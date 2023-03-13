import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/RegistrationPage/RegistrationPage';
import Login from './pages/loginPage/Login';
import HomePage from './pages/HomePage/HomePage';
import Loading from './pages/LandingPage/LoadingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Loading />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/homepage' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
