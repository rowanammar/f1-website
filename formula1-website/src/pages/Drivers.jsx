import { useState } from "react";
import driversData from "../../data/driversData";

function FlipCard({ driver }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        <div
          className="flip-card-front"
          style={{ background: driver.frontColor }}
        >
          <img
            src={driver.image}
            alt={driver.name}
            className="driver-image"
          />
          <p className="title">{driver.name}</p>
          <p>{driver.team}</p>
        </div>
        <div
          className="flip-card-back"
          style={{ background: driver.backColor }}
        >
          <p className="title">{driver.name}</p>
          <p>{driver.info}</p>
        </div>
      </div>
    </div>
  );
}

function Drivers() {
  return (
    <div className="drivers-page">
      <h1>Drivers of Formula 1 History</h1>
      <div className="drivers-grid">
        {driversData.map((driver) => (
          <FlipCard key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
}

export default Drivers;
