import { removeFromWishlist } from "../utils/removeFromWishlist";
import { addToWishlist } from "../utils/addToWishlist";
import { updateCart } from "../utils/updateCart";
import { checkAddedInCart } from "../utils/checkAddedInCart";
import { decrementCart } from "../utils/decrementCart";
import { removeFromCart } from "../utils/removeFromCart";
import { userDefaultState } from "../contexts/userDefaultState";

export const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "UPDATE_WISHLIST":
      const updatedWishlist = payload.itemInWishlist
        ? removeFromWishlist(userState.userWishlist, payload.product)
        : addToWishlist(userState.userWishlist, payload.product);

      return {
        ...userState,
        userWishlist: updatedWishlist,
      };

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

    case "RESET":
      return userDefaultState;

    default:
      return userState;
  }
};
