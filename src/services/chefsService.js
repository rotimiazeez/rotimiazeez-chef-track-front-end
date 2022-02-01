import { toast } from 'react-toastify';
import { getChefsAsync } from '../api/chefs';
import { chefsRequested, setChefs, setChefsFailure } from '../redux/slices/cheffs';

export const getChefs = () => async (dispatch) => {
  dispatch(chefsRequested());
  try {
    const response = await getChefsAsync();
    dispatch(setChefs(response.data));
  } catch (error) {
    dispatch(setChefsFailure(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const chefsGe = () => {
  console.log('casrs');
};
