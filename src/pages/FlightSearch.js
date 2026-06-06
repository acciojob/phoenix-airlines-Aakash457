import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function FlightSearch() {
  const [tripType, setTripType] = useState("oneway");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const isValid = source && destination && date;

  const handleSearch = () => {
    dispatch({
      type: "SET_SEARCH",
      payload: {
        tripType,
        source,
        destination,
        date,
      },
    });

    history.push("/flight-results");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Flights</h2>

      <div>
        <label>
          <input
            type="radio"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={(e) => setTripType(e.target.value)}
          />
          One Way
        </label>

        <label style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            value="roundtrip"
            checked={tripType === "roundtrip"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Round Trip
        </label>
      </div>

      <br />

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
      >
        <option value="">Select Source</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Chennai">Chennai</option>
      </select>

      <br />
      <br />

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >
        <option value="">Select Destination</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Chennai">Chennai</option>
      </select>

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={handleSearch}
        disabled={!isValid}
      >
        SEARCH FLIGHT
      </button>
    </div>
  );
}