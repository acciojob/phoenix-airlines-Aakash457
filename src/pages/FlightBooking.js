import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FlightBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    if (!name || !email || !phone) {
      return "All fields required";
    }
    if (!email.includes("@")) {
      return "Invalid email";
    }
    if (phone.length !== 10) {
      return "Phone must be 10 digits";
    }
    return "";
  };

  const handleSubmit = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    dispatch({
      type: "SET_USER",
      payload: { name, email, phone }
    });

    navigate("/confirmation");
  };

  return (
    <div>
      <h2>Enter Details</h2>

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPhone(e.target.value)} />

      <p style={{ color: "red" }}>{error}</p>

      <button onClick={handleSubmit}>
        Confirm Booking
      </button>
    </div>
  );
}