import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setPassenger } from "../redux/bookingSlice";

function FlightBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    if (!name || !email || !phone) {
      alert("All fields are required");
      return;
    }

    dispatch(
      setPassenger({
        name,
        email,
        phone,
      })
    );

    navigate("/confirmation");
  };

  return (
    <div className="container">
      <h2>Passenger Details</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default FlightBooking;