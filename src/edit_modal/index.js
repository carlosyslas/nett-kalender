import { connect } from "react-redux";
import EditModal from "./EditModal";
import { selectEvent } from "../events/selectors";
import {
  selectIsOpen,
  selectEventId,
  selectPreselectedDate
} from "./selectors";
import { closeEditModal } from "./actions";
import { addEvent, updateEvent } from "../events/actions";

const mapStateToProps = state => ({
  isOpen: selectIsOpen(state),
  preselectedDate: selectPreselectedDate(state),
  ...selectEvent(state, selectEventId(state))
});

const mapDispatchToProps = {
  close: closeEditModal,
  addEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal);
