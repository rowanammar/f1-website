function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src="cars.jpg" alt="Racing Cars" className="hero-image" />
        <div className="hero-overlay">
          <h1>Experience the Thrill of Formula 1</h1>
        </div>
      </section>

      <section className="history">
        <div className="container">
          <h2>The History of Formula 1</h2>
          <p>
            Formula 1 began in 1950 as the pinnacle of motorsport. The sport
            quickly evolved into a global phenomenon, featuring legendary
            drivers, state-of-the-art technology, and fierce rivalries. From the
            early days of Silverstone to the modern era of hybrid power units,
            F1 has captivated millions with its blend of speed, strategy, and
            spectacle.
          </p>
          <p>
            Over the decades, F1 has not only been about racing—it’s a story of
            innovation, determination, and the relentless pursuit of excellence.
            Every race tells a tale of precision engineering, human skill, and
            the drama of competition at its highest level.
          </p>
        </div>
      </section>

      <section className="how-f1-works">
        <div className="container">
          <h2>How Formula 1 Works</h2>
          <div className="cards">
            <div className="card">
              <h3>Race Weekend</h3>
              <p>
                A typical race weekend consists of practice sessions,
                qualifying, and the main race, where drivers battle for pole
                positions and points.
              </p>
            </div>
            <div className="card">
              <h3>Qualifying</h3>
              <p>
                Qualifying determines the starting grid. Drivers push their cars
                to the limit to secure the best possible positions for the race.
              </p>
            </div>
            <div className="card">
              <h3>Championship Points</h3>
              <p>
                Points are awarded based on race finishing positions. Both
                drivers and teams compete for the championship titles over the
                course of a season.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;
