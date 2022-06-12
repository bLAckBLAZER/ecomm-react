import "./SideBar.css";
import { Link } from "react-router-dom";

export const SideBar = ({
  setShowSideBar,
  userLogout,
  dispatchAuth,
  userDispatch,
  authState,
  itemsInCart,
  userWishlist,
}) => {
  return (
    <div className="modal-container">
      <aside className="mob-aside">
        <div className="side-bar-item">
          <i className="fas fa-times" onClick={() => setShowSideBar(false)}></i>
        </div>
        <div className="side-bar-item">
          <Link to="/cart">My Cart</Link>
        </div>
        <div className="side-bar-item">
          <Link to="/wishlist">My Wishlist</Link>
        </div>
        <div className="side-bar-item" style={{ justifySelf: "flex-end" }}>
          {authState.token ? (
            <Link
              to="/logout"
              onClick={() => userLogout(dispatchAuth, userDispatch)}
            >
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </aside>
    </div>
  );
};
