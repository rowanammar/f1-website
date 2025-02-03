import React, { useState } from 'react';
import circuits from "../../data/circuits";

function Circuits(){
  const [hoveredCircuit, setHoveredCircuit] = useState(null);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {circuits.map((circuit, index) => (
          <div
            key={index}
            className={`carousel-item ${hoveredCircuit === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCircuit(index)}
            onMouseLeave={() => setHoveredCircuit(null)}
            style={{ "--rotate": `${index * (360 / circuits.length)}deg` }}
          >
            <img src={circuit.image} alt={circuit.name} />
            {hoveredCircuit === index && (
              <div className="circuit-info">
                <h3>{circuit.name}</h3>
                <p>{circuit.info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Circuits;
