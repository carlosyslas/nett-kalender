import { connect } from "react-redux";
import DeleteModal from "./DeleteModal";
import { closeDeleteModal } from "./actions";
import { deleteEvent } from "../events/actions";
import { selectIsOpen, selectEventId } from "./selectors";
import { selectEvent } from "../events/selectors";

const mapStateToProps = state => ({
  isOpen: selectIsOpen(state),
  ...selectEvent(state, selectEventId(state))
});

const mapDispatchToProps = {
  close: closeDeleteModal,
  deleteEvent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);
