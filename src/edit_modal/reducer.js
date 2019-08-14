import { OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL } from "./actions";

const initialState = {
  isOpen: false,
  eventId: null,
  preselectedDate: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_EDIT_MODAL:
      return {
	isOpen: true,
	eventId: payload && payload.eventId,
	preselectedDate: payload && payload.preselectedDate
      };
    case CLOSE_EDIT_MODAL:
      return {
	isOpen: false,
	eventId: null,
	preselectedDate: null
      };
    default:
      return state;
  }
};
