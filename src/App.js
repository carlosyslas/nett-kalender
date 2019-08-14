import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import format from "date-fns/format";
import Monthly from "./monthly";
import EditModal from "./edit_modal";
import DeleteModal from "./delete_modal";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/:year/:month" component={Monthly} />
        {/* TODO: Add weekly and daily views */}
        <Route
          path="/"
          exact
          render={() => {
            const now = new Date();
            return (
              <Redirect to={`/${format(now, "YYYY")}/${format(now, "MM")}`} />
            );
          }}
        />
      </BrowserRouter>
      <EditModal />
      <DeleteModal />
    </div>
  );
}

export default App;
