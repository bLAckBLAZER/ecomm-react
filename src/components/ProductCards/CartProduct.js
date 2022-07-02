import { useUser } from "../../contexts/UserContext";
import {
  moveToWishlist,
  incrementCart,
  decrementCart,
  removeFromCart,
} from "../../utils/productFunctions";

import { useAuth } from "../../contexts/AuthContext";

export const CartProduct = ({ product }) => {
  const {
    productImage,
    description,
    title,
    brand,
    price,
    originalPrice,
    inStock,
    rating,
    qtyOrdered,
    category,
  } = product;

  const { userState, userDispatch } = useUser();

  const { authState } = useAuth();
  const discountPercent = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div className="card card-ecom card-horizontal card-shadow">
      <div className="card-img">
        <img
          src={productImage}
          alt={description}
          title={description}
          className="img-res"
        />
      </div>

      <div className="card-info">
        <div className="card-heading">
          <h2 className="card-title">{title}</h2>
          {/* <h4 className="card-subtitle">{description}</h4> */}
        </div>

        <div className="card-price flex align-ctr">
          <strong className="h3">{`₹ ${price}/-`}</strong>
          <small className="txt-strike">{`₹ ${originalPrice}/-`}</small>
          <small className="discount-percent">{`(${discountPercent}% OFF)`}</small>
        </div>

        <p className="card-text">{description}</p>

        <div className="card-qty flex align-ctr">
          <div className="h4">Qty:</div>

          <div className="card-qty-actions">
            <i
              className="fas fa-minus qty-action"
              onClick={() =>
                decrementCart({
                  product,
                  userDispatch,
                  token: authState.token,
                })
              }
            ></i>

            <div className="flex align-ctr justify-ctr flex-wrap input-qty">
              {qtyOrdered}
            </div>
            <i
              className="fas fa-plus qty-action"
              onClick={() =>
                incrementCart({
                  product,
                  userDispatch,
                  token: authState.token,
                })
              }
            ></i>
          </div>
        </div>

        <div className="card-footer">
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() =>
                removeFromCart({
                  product,
                  userDispatch,
                  token: authState.token,
                })
              }
            >
              Remove from cart
            </button>
            <button
              className="btn btn-secondary"
              onClick={() =>
                moveToWishlist({
                  product,
                  userDispatch,
                  wishlist: userState.userWishlist,
                  token: authState.token,
                })
              }
            >
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
