import { updateCart } from "../utils/updateCart";
import { checkAddedInCart } from "../utils/checkAddedInCart";
import { decrementCart } from "../utils/decrementCart";
import { removeFromCart } from "../utils/removeFromCart";
import { userDefaultState } from "../contexts/userDefaultState";

export const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      const isAddedInCart = checkAddedInCart(userState.userCart, payload);

      let updatedCart = [];
      if (isAddedInCart) {
        updatedCart = updateCart(userState.userCart, payload);
      } else {
        updatedCart = userState.userCart.concat({
          ...payload,
          qtyOrdered: 1,
        });
      }

      return {
        ...userState,
        userCart: updatedCart,
      };

    case "DECREMENT_FROM_CART":
      const newCart =
        payload.qtyOrdered === 1
          ? removeFromCart(userState.userCart, payload)
          : decrementCart(userState.userCart, payload);

      return {
        ...userState,
        userCart: newCart,
      };

    case "REMOVE_FROM_CART":
      return {
        ...userState,
        userCart: removeFromCart(userState.userCart, payload),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...userState,
        userWishlist: userState.userWishlist.concat(payload),
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...userState,
        userWishlist: userState.userWishlist.filter(
          (product) => product._id !== payload._id
        ),
      };

    case "SET_WISHLIST":
      return { ...userState, userWishlist: payload };

    case "RESET":
      return userDefaultState;

    default:
      return userState;
  }
};
