import { CREATE_BOOKING, CANCEL_BOOKING } from '../types';

export const createBooking = (bookingDetails) => {
  return {
    type: CREATE_BOOKING,
    payload: bookingDetails,
  };
};

export const cancelBooking = (bookingId) => {
  return {
    type: CANCEL_BOOKING,
    payload: bookingId,
  };
};
