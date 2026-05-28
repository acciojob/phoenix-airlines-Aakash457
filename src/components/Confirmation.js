import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  const { flight, passenger } = useSelector(
    (state) => state.booking
  );

  return (
    <div className="container">
      <h2>Booking Confirmed</h2>

      <p>Name: {passenger.name}</p>
      <p>Email: {passenger.email}</p>
      <p>Phone: {passenger.phone}</p>

      <p>From: {flight.source}</p>
      <p>To: {flight.destination}</p>
      <p>Date: {flight.date}</p>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default Confirmation;