import { Footer, NavBar, CartProduct } from "../../components";
import { useUser } from "../../contexts/UserContext";
import { CartSummary } from "./CartSummary";
import "./CartPage.css";
export const CartPage = () => {
  const { userState, userDispatch } = useUser();

  return (
    <div className="wrapper justify-between">
      <NavBar />
      <main className="flex-1">
        <div className="container">
          <div className="h3 txt-center">My Cart</div>
          <hr />
          <div className="cart-container">
            <div className="cart-items">
              {userState.userCart.map((product) => (
                <CartProduct product={product} key={product._id} />
              ))}
            </div>
            <CartSummary userCart={userState.userCart} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
