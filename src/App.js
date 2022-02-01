import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/HomePage/Login';
import SignUp from './components/HomePage/SignUp';
import HomePage from './components/HomePage/HomePage';
import Details from './components/HomePage/Details';
import AddItem from './components/AddItem/AddItem';
import 'react-toastify/dist/ReactToastify.css';
import Reservation from './components/Reservation/Reservation';
import Reserve from './components/Reserve/Reserve';
import MyReservations from './components/Reservation/MyReservations';
import DeleteItem from './components/DeleteItem/DeleteItem';

const App = () => (
  <div className="app">
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/chefs" exact element={<HomePage />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/myreservations" element={<MyReservations />} />
        <Route exact path="/addItem" element={<AddItem />} />
        <Route exact path="/deleteItem" element={<DeleteItem />} />
        <Route exact path="/reserve" element={<Reservation />} />
        <Route exact path="/reserve/:id" element={<Reserve />} />
      </Routes>
    </Router>
  </div>
);

export default App;
