import logo from './logo.svg';
import './App.css';
import {Route, Routes , BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' Component={Home}  exact />
          <Route path='/login' Component={Login}  exact />
          <Route path='/register' Component={Register}  exact />
          <Route path='/bookingcar' Component={BookingCar}  exact />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
