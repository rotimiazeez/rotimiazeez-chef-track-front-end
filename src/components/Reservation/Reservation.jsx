import React, { useEffect, useState } from 'react';
import './Reservation.css';
import { GrClose } from 'react-icons/gr';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getChefs } from '../../services/chefsService';
import { createReservation } from '../../services/reservationService';
import { getCities } from '../../services/citiesService';
import storage from '../../services/storageService';

export default function Reservation() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.reservation);
  const currentUser = storage.getAuthToken();
  const { list: chefs } = useSelector((state) => state.entities.cheffs);
  const { list: cities } = useSelector((state) => state.entities.cities);
  const [reservation, setReservation] = useState({
    city: '',
    chef: '',
    startDate: '',
    endDate: '',
  });
  const loadCities = async () => {
    try {
      dispatch(getCities());
    } catch (error) {
      console.log('Loading cities Error');
    }
  };
  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };
  const loadChefs = async () => {
    try {
      dispatch(getChefs());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadChefs();
    loadCities();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReservation({
        chef_id: reservation.chef,
        user_id: currentUser.id,
        city_id: reservation.city,
        start_date: reservation.startDate,
        end_date: reservation.endDate,
      }),
    ).then(() => {
      history('/');
    });
  };

  const closePage = () => {
    history('/');
  };

  const {
    city, startDate, endDate, chef,
  } = reservation;

  return (
    <div className="reg">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <header className="header">
            <div className="hamburger">
              <HiMenuAlt4 />
            </div>
            <div className="search">
              <GrClose
                style={{
                  color: '#97bf11',
                  fontSize: '1.5rem',
                  paddingLeft: '10px',
                }}
                onClick={closePage}
              />
            </div>
          </header>
          <div className="containerr">
            <h1 className="reg-form-title">BOOK A CHEF TODAY TO EAT WITH US</h1>
            <div className="baar" />
            <p className="description">
              Welcome to ChefTrack, the best chef rental service in the world.
              Book a chef today and enjoy your trip. In order to book a chef, you
              must be logged in. Select your city, chef, start date and end date.
              Then click on the book button. This will create a reservation for
              you. For more information, please contact us. Thank you for
              choosing us.
            </p>
            <form className="select-book" onSubmit={handleSubmit}>
              <div className="reserve-wrapper">
                <div className="reserve-date">
                  <label htmlFor="startDate">
                    Start Date:
                    <input
                      type="date"
                      name="startDate"
                      id="date"
                      value={startDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="reserve-date">
                  <label htmlFor="endDate">
                    End Date:
                    <input
                      type="date"
                      name="endDate"
                      id="date"
                      value={endDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="select-and-book">
                <div className="select-city">
                  <select name="city" value={city} onChange={handleChange}>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select-city">
                  <select name="chef" value={chef} onChange={handleChange}>
                    {chefs.map((chef) => (
                      <option key={chef.id} value={chef.id}>
                        {chef.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="book-btn">
                <button type="submit" className="btn">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
