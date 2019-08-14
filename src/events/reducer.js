import { FETCH_MONTH_EVENTS } from "../monthly/actions";
import { ADD_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./actions";

export default (state = {}, { type, payload, meta }) => {
  switch (type) {
    case FETCH_MONTH_EVENTS.COMPLETED: {
      const newState = { ...state };

      payload.forEach(item => {
	newState[item.id] = item;
      });

      return newState;
    }

    case ADD_EVENT.COMPLETED:
    case UPDATE_EVENT.COMPLETED: {
      return {
	...state,
	[payload.id]: payload
      };
    }
    case DELETE_EVENT.COMPLETED: {
      const { [meta]: _, ...newState } = state;

      return newState;
    }
    default:
      return state;
  }
};
