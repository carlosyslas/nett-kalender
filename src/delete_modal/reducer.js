import { OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL } from "./actions";

const initialState = {
  isOpen: false,
  eventId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_DELETE_MODAL:
      return {
	isOpen: true,
	eventId: payload
      };
    case CLOSE_DELETE_MODAL:
      return {
	isOpen: false,
	eventId: null
      };
    default:
      return state;
  }
};
