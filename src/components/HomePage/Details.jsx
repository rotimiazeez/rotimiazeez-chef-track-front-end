import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { logoutUser } from '../../services/authService';
import Nav from '../Nav';
import './Details.css';
import { chefsSelector } from '../../redux/slices/chefs';

function Details() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const chefArray = useSelector(chefsSelector);
  const currentChef = chefArray.find((chef) => chef.id === location.state.chefId);
  const handleLogOut = () => {
    dispatch(logoutUser(history));
    history('/login');
  };

  const goToReservePage = (currentChef) => {
    history(`/reserve/${currentChef.id}`, { state: { currentChef } });
  };
  return (
    <div className="contents p-0">
      <Nav handleLogOut={handleLogOut} />
      <div className="chef-details d-flex align-items-center justify-content-between w-100 p-4">
        <div className="image-holder">
          <img alt="" src={currentChef.image} className="chef-image" />
          <div id="backButtonContainer">
            <div
              onClick={() => {
                history('/');
              }}
              onKeyPress={() => {}}
              role="button"
              tabIndex="0"
              id="backButton"
            >
              <i className="fa fa-caret-left fsize-25" />
            </div>
          </div>
        </div>
        <div className="text-details">
          <h5 className="fw-bold text-end fsize-25">
            {currentChef.name.toUpperCase()}
          </h5>
          <p className="text-end fsize-15">- $50 deposit on any purchase</p>
          <Table striped>
            <tbody>
              <tr>
                <td className="fw-bold">PRICE</td>
                <td className="text-end">{`$ ${currentChef.price}`}</td>
              </tr>
              <tr>
                <td className="fw-bold">NUMBER OF FOODS</td>
                <td className="text-end">{`${currentChef.number_of_seats}`}</td>
              </tr>
              <tr>
                <td className="fw-bold">DURATION</td>
                <td className="text-end">{`${currentChef.duration} Months`}</td>
              </tr>
            </tbody>
          </Table>
          <h4 className="fsize-15 fw-bold text-end">Description</h4>
          <p className="fsize-12 text-end">{currentChef.description}</p>
          <Button
            type="button"
            variant="success"
            className="rounded-pill p-3 bg-green fsize-20"
            onClick={() => goToReservePage(currentChef)}
          >
            <i className="far fa-bookmark me-3" />
            RESERVE
            <i className="fa fa-arrow-circle-right ms-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
