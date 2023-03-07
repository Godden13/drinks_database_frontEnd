import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/RegistrationPage/RegistrationPage';
import Login from './pages/loginPage/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Registration />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
