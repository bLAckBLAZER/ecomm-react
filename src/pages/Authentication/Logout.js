import { Link } from "react-router-dom";
import "./Authentication.css";

export const Logout = () => {
  return (
    <div className="logout">
      <p>You have successfully logged out!</p>
      <Link to="/" className="btn btn-primary">
        Homepage
      </Link>
    </div>
  );
};
