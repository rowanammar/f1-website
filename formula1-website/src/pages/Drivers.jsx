import driversData from "../../data/driversData";

function Drivers() {
  return (
    <div className="drivers-page">
      <h1>Drivers of Formula 1 History</h1>
      <div className="drivers-grid">
        {driversData.map((driver) => (
          <div key={driver.id} className="flip-card">
            <div className="flip-card-inner">
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
        ))}
      </div>
    </div>
  );
}

export default Drivers;
