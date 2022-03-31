import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/AuthContext";
import { checkItemWishlist } from "../../utils/checkItemWishlist";

export const ProductCard = ({ product }) => {
  const { productImage, description, title, brand, price, inStock, rating } =
    product;

  const { userState, userDispatch } = useUser();

  const { userWishlist, userCart } = userState;

  const { authState } = useAuth();

  const itemInWishlist = checkItemWishlist(userWishlist, product);

  const navigate = useNavigate();

  return (
    <div className="product">
      <div className={`card card-ecom badge-container`}>
        <div className="card-body ">
          {!inStock ? (
            <div className="card-overlay">
              <div className="overlay-text">Out Of Stock</div>
            </div>
          ) : null}
          <div className="card-img">
            <img src={productImage} alt={description} className="img-res" />
          </div>
          <div className="badge rating">{rating} ⭐</div>
          <div className="card-heading">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-subtitle">{brand}</h4>
          </div>
          <p className="card-text">{`₹ ${price}/-`}</p>
        </div>
        <div className="card-footer">
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() =>
                authState.token
                  ? userDispatch({ type: "ADD_TO_CART", payload: product })
                  : navigate("/login")
              }
            >
              Add to cart
            </button>
          </div>

          <div className="card-icons">
            <i
              className={`${itemInWishlist ? "fas" : "far"} fa-heart`}
              aria-hidden="true"
              onClick={() =>
                userDispatch({
                  type: "UPDATE_WISHLIST",
                  payload: { product, itemInWishlist },
                })
              }
            ></i>
            <i className="fas fa-share-alt" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
