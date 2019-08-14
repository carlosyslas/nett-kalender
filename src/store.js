import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import monthly from "./monthly/reducer";
import events from "./events/reducer";
import editModal from "./edit_modal/reducer";
import deleteModal from "./delete_modal/reducer";

const rootReducer = combineReducers({
  events,
  monthly,
  editModal,
  deleteModal
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
