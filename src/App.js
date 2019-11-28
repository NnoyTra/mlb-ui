import React from "react";
import "./App.css";
import Navbar from "./COMPONENTS/COMMONS/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TeamList from "./COMPONENTS/teamList";
import Home from "./COMPONENTS/COMMONS/Home";
import AboutUs from "./COMPONENTS/COMMONS/AboutUs";
import TeamForm from "./COMPONENTS/teamForm";

import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/home" component={Home} />
            <Route exact path="/teams" component={TeamList} />
            {/* <Route exact path={'/reservations/hotel/:uuid'} component={ReservationsList} />
                <Route exact path={'/reservation/hotel/:uuid/new'} component={ReservationForm} /> */}
            <Route exact path="/teamForm" component={TeamForm} />
            <Route exact path="/aboutus" component={AboutUs} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
