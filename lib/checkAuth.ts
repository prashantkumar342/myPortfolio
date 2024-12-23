import axios from "axios";
import { Dispatch } from "redux";

import { setAuthStatus } from "@/redux/slices/globalVar";

const checkAuth = async (dispatch: Dispatch) => {
  try {
    const response = await axios.post("/api/validateUser");

    if (response.data.message === "Authorized") {
      dispatch(setAuthStatus(true));
    } else {
      dispatch(setAuthStatus(false));
    }
  } catch (err) {
    dispatch(setAuthStatus(false));
  }
};

export default checkAuth;
