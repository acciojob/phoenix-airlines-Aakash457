import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const data = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Booking Confirmed ✅</h2>

      <p>Name: {data.user.name}</p>
      <p>Email: {data.user.email}</p>
      <p>Phone: {data.user.phone}</p>

      <p>From: {data.source}</p>
      <p>To: {data.destination}</p>
      <p>Date: {data.date}</p>

      <p>Flight: {data.flight?.airline}</p>
      <p>Price: ₹{data.flight?.price}</p>

      <br />

      <button onClick={() => navigate("/")}>
        BACK TO HOME
      </button>
    </div>
  );
}