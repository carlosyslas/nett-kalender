export const OPEN_DELETE_MODAL = "OPEN_DELETE_MODAL";
export const CLOSE_DELETE_MODAL = "CLOSE_DELETE_MODAL";

export const openDeleteModal = eventId => ({
  type: OPEN_DELETE_MODAL,
  payload: eventId
});

export const closeDeleteModal = () => ({ type: CLOSE_DELETE_MODAL });
