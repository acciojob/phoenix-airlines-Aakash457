import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function FlightResults() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { source, destination } = useSelector((state) => state);

  let flights = [];

  if (source === "Mumbai" && destination === "Delhi") {
    flights = [
      { id: 1, airline: "Phoenix Air", price: 5000 },
      { id: 2, airline: "SkyJet", price: 6500 }
    ];
  }

  const handleBook = (flight) => {
    dispatch({ type: "SET_FLIGHT", payload: flight });
    history.push("/flight-booking");
  };

  return (
    <div>
      <h2>Flight Results</h2>

      <ul>
        {flights.length === 0 ? (
          <li>No Flights Available</li>
        ) : (
          flights.map((f) => (
            <li key={f.id}>
              {f.airline} - ₹{f.price}

              <button
                className="book-flight"
                onClick={() => handleBook(f)}
              >
                Book Flight
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}