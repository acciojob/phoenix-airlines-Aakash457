import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div>
      <h1>Welcome to Flight Booking App</h1>

      <button onClick={() => history.push("/flight-search")}>
        SEARCH FLIGHTS HERE
      </button>
    </div>
  );
}