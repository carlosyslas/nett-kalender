import axios from "axios";
import { createAsyncActionTypes } from "../shared/reduxHelpers";
import { BASE_URL } from "../shared/constants";

export const DELETE_EVENT = createAsyncActionTypes("DELETE_EVENT");
export const ADD_EVENT = createAsyncActionTypes("ADD_EVENT");
export const UPDATE_EVENT = createAsyncActionTypes("UPDATE_EVENT");

export const deleteEvent = eventId => async dispatch => {
  dispatch({ type: DELETE_EVENT.STARTED, meta: eventId });
  try {
    await axios.delete(`${BASE_URL}/events/${eventId}`);
    dispatch({ type: DELETE_EVENT.COMPLETED, meta: eventId });
  } catch (e) {
    dispatch({ type: DELETE_EVENT.FAILED, payload: e.message, meta: eventId });
  }
};

export const addEvent = body => async dispatch => {
  dispatch({ type: ADD_EVENT.STARTED });
  try {
    await axios.post(`${BASE_URL}/events`, body);
    dispatch({ type: ADD_EVENT.COMPLETED, payload: body });
  } catch (e) {
    dispatch({ type: ADD_EVENT.FAILED, payload: e.message });
  }
};

export const updateEvent = body => async dispatch => {
  dispatch({ type: UPDATE_EVENT.STARTED });
  try {
    await axios.put(`${BASE_URL}/events/${body.id}`, body);
    dispatch({ type: UPDATE_EVENT.COMPLETED, payload: body });
  } catch (e) {
    dispatch({ type: UPDATE_EVENT.FAILED, payload: e.message });
  }
};
