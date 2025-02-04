import React, { useEffect, useState } from "react";
 

function Races() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json") //api
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch race data"); //exception handling 3shan law api bayez
        }
        return response.json();
      })
      .then((data) => {
        setRaces(data.MRData.RaceTable.Races);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching race data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="races-page"><p>Loading race schedule…</p></div>;
  }

  if (error) {
    return <div className="races-page"><p>Error: {error.message}</p></div>;
  }

  return (
    <div className="races-page">
      <h1>Formula 1 Race Schedule</h1>
      {races.length === 0 ? (
        <p>No race data available.</p>
      ) : (
        <div className="races-grid">
          {races.map((race) => (
            <div key={race.round} className="race-card">
              <h2 className="race-name">{race.raceName}</h2>
              <p className="race-round">
                <strong>Round:</strong> {race.round}
              </p>
              <p className="race-date">
                <strong>Date:</strong> {race.date}
              </p>
              <p className="race-time">
                <strong>Time:</strong>{" "}
                {race.time ? race.time.slice(0, 8) : "TBA"}
              </p>
              <p className="race-circuit">
                <strong>Circuit:</strong> {race.Circuit.circuitName}
              </p>
              <p className="race-location">
                <strong>Location:</strong>{" "}
                {race.Circuit.Location.locality}, {race.Circuit.Location.country}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Races;
