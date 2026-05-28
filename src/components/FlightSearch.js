import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setFlight } from "../redux/bookingSlice";

function FlightSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tripType, setTripType] = useState("oneway");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      setFlight({
        tripType,
        source,
        destination,
        date,
      })
    );

    navigate("/flight-booking");
  };

  return (
    <div className="container">
      <h2>Search Flights</h2>

      <select
        value={tripType}
        onChange={(e) => setTripType(e.target.value)}
      >
        <option value="oneway">One Way</option>
        <option value="roundtrip">Round Trip</option>
      </select>

      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="book-flight" onClick={handleSubmit}>
        Book Flight
      </button>
    </div>
  );
}

export default FlightSearch;