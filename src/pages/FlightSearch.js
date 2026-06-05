import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValid = source && destination && date;

  const handleSearch = () => {
    dispatch({
      type: "SET_SEARCH",
      payload: { tripType, source, destination, date }
    });

    navigate("/flight-results");
  };

  return (
    <div>
      <h2>Search Flights</h2>

      {/* ✅ REQUIRED RADIO BUTTONS */}
      <label>
        <input
          type="radio"
          value="oneway"
          checked={tripType === "oneway"}
          onChange={(e) => setTripType(e.target.value)}
        />
        One Way
      </label>

      <label>
        <input
          type="radio"
          value="roundtrip"
          checked={tripType === "roundtrip"}
          onChange={(e) => setTripType(e.target.value)}
        />
        Round Trip
      </label>

      <br /><br />

      {/* ✅ REQUIRED TEXT INPUTS */}
      <input
        type="text"
        placeholder="Source"
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="text"
        placeholder="Destination"
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSearch} disabled={!isValid}>
        SEARCH FLIGHT
      </button>
    </div>
  );
}