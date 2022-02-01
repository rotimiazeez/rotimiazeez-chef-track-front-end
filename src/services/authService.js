import { toast } from 'react-toastify';
import { createUserAsynch, loginUserAsynch } from '../api/auth';
import {
  authRequestFailed, authRequestStarted, clearAuthData, setUser,
} from '../redux/slices/auth';
import { updateToken } from '../utils/auth';

export const createUser = (user) => async (dispatch) => {
  dispatch(authRequestStarted());
  try {
    const response = await createUserAsynch(user);
    dispatch(setUser(response.data));
    updateToken(response.data.data);
    toast.success('User created successfully');
    return response.data;
  } catch (error) {
    dispatch(authRequestFailed(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
  return null;
};

export const loginUser = (user) => async (dispatch) => {
  dispatch(authRequestStarted());
  try {
    const response = await loginUserAsynch(user);
    dispatch(setUser(response.data));
    updateToken(response.data.data);
    toast.success('Welcome to Chef track');
    return response.data;
  } catch (error) {
    dispatch(authRequestFailed(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
  return null;
};

export const logoutUser = () => (dispatch) => {
  updateToken(null);
  dispatch(clearAuthData());
  localStorage.removeItem('token');
};

export const logoutuser = () => {
  console.log('loginUser');
};
