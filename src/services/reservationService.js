import { toast } from 'react-toastify';
import {
  reservationFailure,
  setReservation,
  reservationCreated,
  reservationRequest,
} from '../redux/slices/reservation';
import {
  getReservationsAsync,
  createReservationAsync,
} from '../api/reservations';

export const getReservation = () => async (dispatch) => {
  dispatch(reservationRequest());
  try {
    const reservation = await getReservationsAsync();
    dispatch(setReservation(reservation.data));
  } catch (error) {
    dispatch(
      reservationFailure(
        error.response ? error.response.data.message : error.message,
      ),
    );
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const createReservation = (reservation) => async (dispatch) => {
  dispatch(reservationRequest());
  try {
    const response = await createReservationAsync(reservation);
    dispatch(reservationCreated(response.data));
    toast.success('Reservation created successfully');
    return response.data;
  } catch (error) {
    dispatch(
      reservationFailure(
        error.response ? error.response.data.message : error.message,
      ),
    );
    toast.error(error.response ? error.response.data.message : error.message);
  }
  return null;
};
