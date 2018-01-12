import * as t from "./constants";
//import { getRequest, postRequest } from "../../services/api";
//import axios from "axios";

export function userSignupRequest(userData) {
  console.log("in userSignupRequest");
  console.log(userData);
  return async function(dispatch) {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "post",
        body: JSON.stringify({ data: userData })
      });
      const json = await response.json();
      const newUser = json.data;
      return dispatch(userSignupSuccess(newUser));
    } catch (error) {
      return dispatch(userSignupFail(error));
    }
  };
}

function userSignupSuccess(user) {
  return {
    type: t.USER_SIGNUP_SUCCESS,
    user
  };
}

function userSignupFail(error) {
  return {
    type: t.USER_SIGNUP_FAIL,
    error
  };
}

//axios is buggy.. switched to fetch instead
//const newUser = await postRequest("/users", { data: userData });
/*const newUser = await axios.post("http://localhost:3001/users", {
  data: userData
});*/
