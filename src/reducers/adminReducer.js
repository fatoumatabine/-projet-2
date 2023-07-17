import { CREATE_BOOKING, CANCEL_BOOKING } from '../types';

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case CANCEL_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((booking) => booking.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookingReducer;
