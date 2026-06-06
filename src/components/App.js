import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import FlightSearch from "../pages/FlightSearch";
import FlightResults from "../pages/FlightResults";
import FlightBooking from "../pages/FlightBooking";
import Confirmation from "../pages/Confirmation";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-results" component={FlightResults} />
        <Route path="/flight-booking" component={FlightBooking} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;