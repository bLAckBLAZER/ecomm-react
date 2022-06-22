import {
  incrementCartView,
  decrementCartView,
  removeFromCartView,
} from "../utils/helperFunctions";
import { userDefaultState } from "../contexts/userDefaultState";

export const userReducer = (userState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...userState,
        userCart: userState.userCart.concat({
          ...payload,
          qtyOrdered: 1,
        }),
      };

    case "INCREMENT_CART":
      return {
        ...userState,
        userCart: incrementCartView(userState.userCart, payload),
      };

    case "DECREMENT_CART":
      const newCart =
        payload.qtyOrdered === 1
          ? removeFromCartView(userState.userCart, payload)
          : decrementCartView(userState.userCart, payload);

      return {
        ...userState,
        userCart: newCart,
      };

    case "REMOVE_FROM_CART":
      return {
        ...userState,
        userCart: removeFromCartView(userState.userCart, payload),
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

    case "SET_CART":
      return { ...userState, userCart: payload };

    case "ADD_ADDRESS":
      return {
        ...userState,
        userAddresses: userState.userAddresses.concat(payload),
      };

    case "UPDATE_ADDRESS":
      const temp = userState.userAddresses.filter(
        (address) => address.id !== payload.id
      );
      const updatedAddresses = temp.concat(payload);

      return {
        ...userState,
        userAddresses: updatedAddresses,
      };

    case "RESET":
      return userDefaultState;

    default:
      return userState;
  }
};
