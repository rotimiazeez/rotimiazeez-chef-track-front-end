import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { createUser } from '../../services/authService';

const SignUp = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user)).then(() => {
      history('/');
    });
  };
  const { name, email, username } = user;
  return (
    <div id="sing-up">
      <form className="box" onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email adress" value={email} onChange={handleChange} required />
        <input type="submit" name="" value="submit" />
        <Link to="/login" className="sign-up">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
