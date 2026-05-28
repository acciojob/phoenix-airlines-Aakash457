import React, { useState } from "react";

function App() {
  const [tripType, setTripType] = useState("oneway");

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const [searched, setSearched] = useState(false);
  const [flightFound, setFlightFound] = useState(false);

  const [showBooking, setShowBooking] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  const [confirmed, setConfirmed] = useState(false);

  const searchFlights = () => {
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }

    setSearched(true);

    if (
      source.toLowerCase() === "mumbai" &&
      destination.toLowerCase() === "delhi"
    ) {
      setFlightFound(true);
    } else {
      setFlightFound(false);
    }
  };

  const validateForm = () => {
    let temp = {};

    if (!name) {
      temp.name = "Name required";
    }

    if (!email.includes("@")) {
      temp.email = "Valid email required";
    }

    if (phone.length < 10) {
      temp.phone = "Valid phone required";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const confirmBooking = () => {
    if (validateForm()) {
      setConfirmed(true);
    }
  };

  if (confirmed) {
    return (
      <div className="container">
        <h1>Booking Confirmed</h1>

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <p>Trip Type: {tripType}</p>
        <p>From: {source}</p>
        <p>To: {destination}</p>
        <p>Date: {date}</p>

        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Go Home
        </button>
      </div>
    );
  }

  if (showBooking) {
    return (
      <div className="container">
        <h1>Flight Booking App</h1>

        <h2>Passenger Details</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && <p>{errors.name}</p>}

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {errors.phone && <p>{errors.phone}</p>}

        <button onClick={confirmBooking}>
          Confirm Booking
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Flight Booking App</h1>

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

      <button onClick={searchFlights}>
        Search Flights
      </button>

      {searched && !flightFound && (
        <p>No Flights Available</p>
      )}

      {flightFound && (
        <div>
          <h3>Flight Available</h3>

          <button
            className="book-flight"
            onClick={() => setShowBooking(true)}
          >
            Book Flight
          </button>
        </div>
      )}
    </div>
  );
}

export default App;