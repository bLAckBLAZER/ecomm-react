import { Link } from "react-router-dom";
import "./Authentication.css";

export const Logout = () => {
  return (
    <div class="logout">
      <p>You have successfully logged out!</p>
      <Link to="/" class="btn btn-primary">
        Homepage
      </Link>
    </div>
  );
};
