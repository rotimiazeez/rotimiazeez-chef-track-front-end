import { toast } from 'react-toastify';
import { getCitiesAsync } from '../api/cities';
import { citiesRequested, setCities, setCitiesFailure } from '../redux/slices/cities';

export const getCities = () => async (dispatch) => {
  dispatch(citiesRequested());
  try {
    const response = await getCitiesAsync();
    dispatch(setCities(response.data));
  } catch (error) {
    dispatch(setCitiesFailure(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const citiesGe = () => {
  console.log('cities');
};
