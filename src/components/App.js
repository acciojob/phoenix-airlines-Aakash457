import React, { useState } from "react";

function App() {
  const [tripType, setTripType] = useState("oneway");

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const [searched, setSearched] = useState(false);
  const [bookingPage, setBookingPage] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);

  const [flightFound, setFlightFound] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  const searchFlights = () => {
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

  const validate = () => {
    let temp = {};

    if (name.trim() === "") {
      temp.name = "Name is required";
    }

    if (!email.includes("@")) {
      temp.email = "Valid email required";
    }

    if (phone.length < 10) {
      temp.phone = "Phone number invalid";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleBooking = () => {
    if (validate()) {
      setConfirmationPage(true);
    }
  };

  if (confirmationPage) {
    return (
      <div className="container">
        <h1>Booking Confirmed</h1>

        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Trip: {tripType}</li>
          <li>From: {source}</li>
          <li>To: {destination}</li>
          <li>Date: {date}</li>
        </ul>

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

  if (bookingPage) {
    return (
      <div className="container">
        <h1>Flight Booking App</h1>

        <h2>Enter Passenger Details</h2>

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

        <button onClick={handleBooking}>Confirm Booking</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Welcome to Flight Booking App</h1>

      <div>
        <label>
          <input
            type="radio"
            name="trip"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={(e) => setTripType(e.target.value)}
          />
          One Way
        </label>

        <label>
          <input
            type="radio"
            name="trip"
            value="roundtrip"
            checked={tripType === "roundtrip"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Round Trip
        </label>
      </div>

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

      <button onClick={searchFlights}>Search Flights</button>

      {searched && !flightFound && (
        <ul>
          <li>No Flights Available</li>
        </ul>
      )}

      {flightFound && (
        <div>
          <ul>
            <li>Flight Name: Phoenix Airlines</li>
            <li>Source: {source}</li>
            <li>Destination: {destination}</li>
            <li>Trip Type: {tripType}</li>
          </ul>

          <button className="book-flight" onClick={() => setBookingPage(true)}>
            Book Flight
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
