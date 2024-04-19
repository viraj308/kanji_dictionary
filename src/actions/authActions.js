import axios from "axios";

// Action Types
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// Action Creators
export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      console.log("worked");
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        userData
      );
      console.log(response.data);
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SIGN_UP_FAILURE, payload: error.response.data.message });
    }
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        userData
      );
      console.log(response.data);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      await axios.get("/auth/logout");
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
};
