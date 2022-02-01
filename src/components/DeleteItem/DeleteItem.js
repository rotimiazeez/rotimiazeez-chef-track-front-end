/* eslint-disable jsx-quotes,
 quotes, react/self-closing-comp, react/jsx-closing-tag-location,
 */

import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getChefs } from "../../services/chefsService";
import { removeChef } from "../../redux/chefs/chefs";
import "./DeleteItem.css";

export default function DeleteItem() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.reservation);
  const { list: chefs } = useSelector((state) => state.entities.cheffs);
  const [id, setId] = useState(0);

  const closePage = () => {
    history("/");
  };

  const deleteChef = async () => {
    console.log(id);
    const url = 'https://cheftrack.herokuapp.com/api/v1/delete_chef';
    const requestBody = JSON.stringify({ chef_id: id });
    await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then((res) => {
        alert("Are you sure you want to delete this chef?");
        console.log(res);
        if (res.status === 201 || res.status === 200) {
          alert("Chef Deleted");

          dispatch(removeChef(id));
          history("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setId(Number(e.target.value));
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
  }, []);

  return (
    <div className='reg'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <header className='header'>
            <div className='hamburger'>
              <HiMenuAlt4 />
            </div>
            <div className='search'>
              <button type='submit' className='button-x' onClick={closePage}>
                <i
                  className='fas fa-times x-icon'
                  style={{
                    color: "#97bf11",
                    fontSize: "1.5rem",
                    paddingLeft: "12px",
                  }}
                ></i>
              </button>
            </div>
          </header>
          <div className='containerr'>
            <h1 className='reg-form-title'>REMOVE A CHEF</h1>
            <div className='baar' />
            <p className='description'>
              Welcome to ChefTrack, the best Chef rental service in the world.
              Choose a chef that you want to remove from the drop down menu. For
              more information, please contact us. Thank you for choosing us.
            </p>
            <div className='select-book'>
              <div className='reserve-wrapper'>
                <div className='select-city'>
                  <select onChange={handleChange}>
                    <option>Select a chef</option>
                    {chefs.map((chef) => (
                      <option key={chef.id} value={chef.id}>
                        {chef.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='book-btn'>
                <button type='button' className='btn' onClick={deleteChef}>
                  Delete Chef
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
