import { CartProduct } from "../../components";
import { useUser } from "../../contexts/UserContext";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";
import "./CartPage.css";
export const CartPage = () => {
  const { userState, userDispatch } = useUser();

  return (
    <main className="flex-1">
      <div className="container">
        <div className="h3 txt-center">My Cart</div>
        <hr />

        {userState.userCart.length > 0 ? (
          <div className="cart-container">
            <div className="cart-items">
              {userState.userCart.map((product) => (
                <CartProduct product={product} key={product._id} />
              ))}
            </div>
            <CartSummary userCart={userState.userCart} />
          </div>
        ) : (
          <div className="width-100 mg-y-2 txt-center">
            <div>Your cart is empty...!</div>
            <Link to="/products">
              <button className="btn btn-primary">Shop now!</button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};
