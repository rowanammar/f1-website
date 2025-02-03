import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/f1.png" alt="F1 Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/drivers" >Drivers</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/races">Races</Link></li>
        <li><Link to="/teams">Teams</Link></li>
      </ul>
        
    </nav>
  );
}

export default NavBar;