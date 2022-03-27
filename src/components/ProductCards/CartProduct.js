import { useUser } from "../../contexts/UserContext";
import { checkItemWishlist } from "../../utils/checkItemWishlist";

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
  } = product;

  const { userState, userDispatch } = useUser();

  const moveToWishlist = (product) => {
    if (!checkItemWishlist(userState.userWishlist, product)) {
      userDispatch({
        type: "UPDATE_WISHLIST",
        payload: { product, itemInWishlist: false },
      });
    }
    userDispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div className="card card-ecom card-horizontal card-shadow">
      <div className="card-img">
        <img src={productImage} alt={description} className="img-res" />
      </div>

      <div className="card-info">
        <div className="card-heading">
          <h2 className="card-title">{title}</h2>
          <h4 className="card-subtitle">{brand}</h4>
        </div>

        <div className="card-price flex align-ctr">
          <div className="h3">{`₹ ${price}/-`}</div>
          <div className="txt-strike">{`₹ ${originalPrice}/-`}</div>
        </div>

        <p className="card-text">{description}</p>

        <div className="card-qty flex align-ctr">
          <div className="h4">Qty:</div>

          <div className="card-qty-actions">
            <i
              className="fas fa-minus qty-action"
              onClick={() =>
                userDispatch({ type: "DECREMENT_FROM_CART", payload: product })
              }
            ></i>

            <div className="flex align-ctr justify-ctr flex-wrap input-qty">
              {qtyOrdered}
            </div>
            <i
              className="fas fa-plus qty-action"
              onClick={() =>
                userDispatch({ type: "ADD_TO_CART", payload: product })
              }
            ></i>
          </div>
        </div>

        <div className="card-footer">
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() =>
                userDispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from cart
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => moveToWishlist(product)}
            >
              Move to wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
