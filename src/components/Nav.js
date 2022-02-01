import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = ({ handleLogOut }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={
      `navigation-panel ${isMobile ? 'vh-100' : ''}`
    }
    >
      <header>
        <div
          className={
            isMobile
              ? 'nav-icons-holder '
              : 'nav-icons-holder nav-mobile-border'
          }
        >
          {/* <img src={logo} alt="Logo" className="logo" /> */}
          <div className="nav-btn-holder">
            <button className="button-signout" type="submit" onClick={handleLogOut}>
              Log out
            </button>
            <button
              className="button-icon"
              type="submit"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <i className="fas fa-times fa-2x" />
              ) : (
                <i className="fas fa-bars fa-2x" />
              )}
            </button>
          </div>
        </div>
      </header>
      <nav>
        <ul className={isMobile ? 'show-mobile-menu' : 'hide-mobile-menu'}>
          <li className="nav-list">
            <Link className="nav-link link-style" to="/chefs">
              Chefs
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link link-style" to="/reserve">
              Reserve
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link link-style" to="/myreservations">
              My reservations
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link link-style" to="/addItem">
              Add chef
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link link-style" to="/deleteItem">
              Delete chef
            </Link>
          </li>
        </ul>
      </nav>
      <footer className={isMobile ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <ul className="footer-ul ul-style">
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://twitter.com/"
            >
              <i className="fab fa-twitter" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://www.facebook.com"
            >
              <i className="fab fa-facebook-f" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://www.google.com/"
            >
              <i className="fab fa-google-plus-g" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://vine.co/"
            >
              <i className="fab fa-vine" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://www.pinterest.com/"
            >
              <i className="fab fa-pinterest-p" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

Nav.propTypes = {
  handleLogOut: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Nav;
