import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/AuthContext";
import { userLogout } from "../../utils/authenticate/authenticationCalls";
import { useEffect } from "react";
import { getUserWishlist, getUserCart } from "../../utils/productFunctions";

export const NavBar = () => {
  const { userState, userDispatch } = useUser();
  const { authState, dispatchAuth } = useAuth();

  const { userCart, userWishlist } = userState;

  const itemsInCart = userCart.reduce((acc, curr) => acc + curr.qtyOrdered, 0);

  useEffect(() => {
    if (authState.token) {
      getUserWishlist({ token: authState.token, userDispatch });
      getUserCart({ token: authState.token, userDispatch });
    }
  }, []);

  return (
    <nav className="navbar fixed">
      <Link to="/">
        <div className="flex align-ctr justify-ctr">
          <div className="nav-logo">
            <img src={Logo} alt="" />
          </div>
          <div href="#" className="nav-heading">
            Sneakoholics
          </div>
        </div>
      </Link>
      <input
        type="text"
        className="input"
        placeholder="What do you want to wear today?"
      />
      <ul className="nav-actions">
        <li className="nav-action-item">
          {authState.token ? (
            <Link to="/logout">
              <button
                className="btn btn-primary"
                onClick={() => userLogout(dispatchAuth, userDispatch)}
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </li>
        <Link to="/cart">
          <li className="nav-action-item">
            <div className="badge-container">
              <i className="fas fa-shopping-cart fa-2x" aria-hidden="true"></i>
              {authState.token && itemsInCart > 0 && (
                <span className="badge badge-icon">{itemsInCart}</span>
              )}
            </div>
          </li>
        </Link>
        <Link to="/wishlist">
          <li className="nav-action-item">
            <div className="badge-container">
              <i className="far fa-heart fa-2x"></i>
              {authState.token && userWishlist.length > 0 && (
                <span className="badge badge-icon">{userWishlist.length}</span>
              )}
            </div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
