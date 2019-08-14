import axios from "axios";
import { createAsyncActionTypes } from "../shared/reduxHelpers";
import { BASE_URL } from "../shared/constants";

export const FETCH_MONTH_EVENTS = createAsyncActionTypes("FETNCH_MONTH_EVENTS");

export const fetchMonthEvents = ({ year, month }) => async dispatch => {
  dispatch({ type: FETCH_MONTH_EVENTS.STARTED });
  try {
    const response = await axios.get(`${BASE_URL}/events/${year}/${month}`);
    dispatch({ type: FETCH_MONTH_EVENTS.COMPLETED, payload: response.data });
  } catch (e) {
    dispatch({ type: FETCH_MONTH_EVENTS.FAILED, payload: e.message });
  }
};
