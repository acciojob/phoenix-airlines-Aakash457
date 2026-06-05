import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/flight-results" element={<FlightResults />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;