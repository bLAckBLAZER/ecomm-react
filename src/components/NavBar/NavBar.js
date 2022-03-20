import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar fixed">
      <a href="#" className="nav-heading">
        Sneakoholics
      </a>
      <input
        type="text"
        className="input"
        placeholder="What do you want to wear today?"
      />
      <ul className="nav-actions">
        <li className="nav-action-item">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </li>
        <li className="nav-action-item">
          <div className="badge-container">
            <i className="fas fa-shopping-cart fa-2x" aria-hidden="true"></i>
            <span className="badge badge-icon">10</span>
          </div>
        </li>
        <li className="nav-action-item">
          <div className="badge-container">
            <i className="far fa-heart fa-2x"></i>
            <span className="badge badge-icon">10</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};