import React, { useState } from "react";

function App() {
  const [tripType, setTripType] = useState("One Way");

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const [searched, setSearched] = useState(false);
  const [flightFound, setFlightFound] = useState(false);

  const [bookingPage, setBookingPage] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  const searchFlights = () => {
    if (!source || !destination || !date) {
      alert("Please fill all fields");
      return;
    }

    setSearched(true);

    // Always show flights after valid search
    setFlightFound(true);
  };

  const validate = () => {
    let temp = {};

    if (!name.trim()) {
      temp.name = "Name is required";
    }

    if (!email.trim()) {
      temp.email = "Email is required";
    }

    if (!phone.trim()) {
      temp.phone = "Phone is required";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleBooking = () => {
    if (validate()) {
      setConfirmationPage(true);
    }
  };

  // CONFIRMATION PAGE
  if (confirmationPage) {
    return (
      <div className="container">
        <h1>Booking Confirmation</h1>

        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Trip Type: {tripType}</li>
          <li>Source: {source}</li>
          <li>Destination: {destination}</li>
          <li>Date: {date}</li>
        </ul>

        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Return Home
        </button>
      </div>
    );
  }

  // BOOKING PAGE
  if (bookingPage) {
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

        <button onClick={handleBooking}>Confirm Booking</button>
      </div>
    );
  }

  // SEARCH PAGE
  return (
    <div className="container">
      <h1>Welcome to Flight Booking App</h1>

      <ul>
        <li>Search Flights</li>
      </ul>

      <div>
        <label>
          <input
            type="radio"
            name="trip"
            value="One Way"
            checked={tripType === "One Way"}
            onChange={(e) => setTripType(e.target.value)}
          />
          One Way
        </label>

        <label>
          <input
            type="radio"
            name="trip"
            value="Round Trip"
            checked={tripType === "Round Trip"}
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
            <li>{source}</li>
            <li>{destination}</li>
            <li>{tripType}</li>
            <li>Phoenix Airlines</li>
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
