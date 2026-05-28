import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import FlightSearch from "./FlightSearch";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-booking" component={FlightBooking} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
