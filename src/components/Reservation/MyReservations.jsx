/* eslint-disable quotes, jsx-quotes, comma-dangle,
react/self-closing-comp,react/jsx-closing-tag-location, no-undef */

import React, { useEffect, useState } from "react";
import "./MyReservations.css";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { getChefs } from "../../services/chefsService";
import { getCities } from "../../services/citiesService";
import storage from "../../services/storageService";

export default function MyReservations() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const currentUser = storage.getAuthToken();
  const { list: chefs } = useSelector((state) => state.entities.cheffs);
  const { list: cities } = useSelector((state) => state.entities.cities);
  const [reservations, setReservations] = useState([]);
  const loadCities = async () => {
    try {
      dispatch(getCities());
    } catch (error) {
      console.log("Loading cities Error");
    }
  };
  const loadChefs = async () => {
    try {
      dispatch(getChefs());
    } catch (error) {
      console.log(error);
    }
  };

  const getReservations = async () => {
    let allReservations = await fetch(
      `https://https://cheftrack.herokuapp.com/api/v1/reservations/${currentUser.id}`
    );
    allReservations = await allReservations.json();
    setReservations(allReservations.data);
  };

  const Reservations = (
    <>
      {reservations.length > 0 ? (
        reservations.map((reservation, index) => {
          const chef = chefs.find((chef) => chef.id === reservation.chef_id);
          const city = cities.find((city) => city.id === reservation.city_id);
          return (
            <tr key={reservation.id}>
              <td>{index + 1}</td>
              <td>{chef.name}</td>
              <td>{city.name}</td>
              <td>{reservation.start_date}</td>
              <td>{reservation.end_date}</td>
            </tr>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );

  const closePage = () => {
    history("/");
  };

  useEffect(async () => {
    await loadChefs();
    await loadCities();
    await getReservations();
  }, []);

  return (
    <div className='reg'>
      <div>
        <div className='containerrr'>
          <h1 className='mt-4 ' id='my-reses-title'>
            MY RESERVATIONS
          </h1>
          <div className='search' id='closeReservation'>
            <GrClose
              style={{
                color: "#97bf11",
                fontSize: "1.5rem",
                paddingLeft: "10px",
              }}
              onClick={closePage}
            />
          </div>
          <Table className='mt-3 table-bordered text-white'>
            <thead>
              <tr>
                <td>#</td>
                <td>Item</td>
                <td>City</td>
                <td>Start Date</td>
                <td>End Date</td>
              </tr>
            </thead>
            <tbody>{Reservations}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
