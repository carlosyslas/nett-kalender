import { combineReducers } from "redux";
import parse from "date-fns/parse";
import format from "date-fns/format";
import { FETCH_MONTH_EVENTS } from "./actions";
import { ADD_EVENT, UPDATE_EVENT } from "../events/actions";

const addToState = (state, event) => {
  const year = format(parse(event.start), "YYYY");
  const date = format(parse(event.start), "MM-DD");

  if (!state.hasOwnProperty(year)) {
    state[year] = {};
  }
  if (!state[year].hasOwnProperty(date)) {
    state[year][date] = [];
  }

  state[year][date].push(event.id);
  state[year][date] = Array.from(new Set(state[year][date]));
};

const cloneState = state => JSON.parse(JSON.stringify(state));

export const entities = (state = {}, { type, payload }) => {
  // TODO: clean state on delete or update. For now the selector is doing the trick.
  switch (type) {
    case FETCH_MONTH_EVENTS.COMPLETED: {
      const newState = cloneState(state);

      payload.forEach(item => {
	addToState(newState, item);
      });

      return newState;
    }
    case ADD_EVENT.COMPLETED:
    case UPDATE_EVENT.COMPLETED: {
      const newState = cloneState(state);
      addToState(newState, payload);
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  entities
});
