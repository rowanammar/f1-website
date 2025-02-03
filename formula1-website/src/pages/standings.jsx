import React, { useEffect, useState } from "react";
function Standings(){
    const [driverStandings, setDriverStandings] = useState([]);
    const [constructorStandings, setConstructorStandings] = useState([]);
    const [loadingDrivers, setLoadingDrivers] = useState(true);
    const [loadingConstructors, setLoadingConstructors] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://ergast.com/api/f1/current/driverStandings.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch driver standings");
          }
          return response.json();
        })
        .then((data) => {
          const drivers =
            data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          setDriverStandings(drivers);
          setLoadingDrivers(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
          setLoadingDrivers(false);
        });

      fetch("http://ergast.com/api/f1/current/constructorStandings.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch constructor standings");
          }
          return response.json();
        })
        .then((data) => {
          const constructors =
            data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          setConstructorStandings(constructors);
          setLoadingConstructors(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
          setLoadingConstructors(false);
        });
    }, []);
  
    if (loadingDrivers || loadingConstructors) {
      return (
        <div className="standings-page">
          <p>Loading standings…</p>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="standings-page">
          <p>Error: {error.message}</p>
        </div>
      );
    }
  
    return (
      <div className="standings-page">
        <h1> Season Standings</h1>
        <div className="standings-section">
          <h2>Driver Standings</h2>
          <div className="standings-grid">
            {driverStandings.map((driver) => (
              <div key={driver.position} className="standing-card">
                <h3>
                  {driver.position}. {driver.Driver.givenName}{" "}
                  {driver.Driver.familyName}
                </h3>
                <p>
                  <strong>Team:</strong> {driver.Constructors[0].name}
                </p>
                <p>
                  <strong>Points:</strong> {driver.points}
                </p>
                <p>
                  <strong>Wins:</strong> {driver.wins}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="standings-section">
          <h2>Constructor Standings</h2>
          <div className="standings-grid">
            {constructorStandings.map((team) => (
              <div key={team.position} className="standing-card">
                <h3>
                  {team.position}. {team.Constructor.name}
                </h3>
                <p>
                  <strong>Points:</strong> {team.points}
                </p>
                <p>
                  <strong>Wins:</strong> {team.wins}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Standings;