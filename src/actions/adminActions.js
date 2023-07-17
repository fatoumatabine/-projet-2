import { FETCH_USERS, DELETE_LISTING } from '../types';

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const deleteListing = (listingId) => {
  return {
    type: DELETE_LISTING,
    payload: listingId,
  };
};
