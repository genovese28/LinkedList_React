import { fetchUsers } from '../services/api';

// constants aka Action Types
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';


export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

// actionCreators
export function addUser(newUser) {
 return {
   type: ADD_USER,
   newUser
 };
}

export function removeUser(id) {
 return {
   type: REMOVE_USER,
   id
 };
}



export function fetchUsersRequest() {
 // THIS IS THE THUNK
 return function(dispatch) {
   dispatch({ type: FETCH_USERS_REQUEST });
   return fetchUsers()
     .then(result => dispatch(fetchUsersSuccess(result)))
     .catch(err => dispatch(fetchUsersFail(err)));
 };
}

export function fetchUsersSuccess(todos) {
 return {
   type: FETCH_USERS_SUCCESS,
   todos
 }
}

export function fetchUsersFail() {}
