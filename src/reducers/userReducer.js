import { removeFromWishlist } from "../utils/removeFromWishlist";
import { addToWishlist } from "../utils/addToWishlist";

export const userReducer = (userState, action) => {
  switch (action.type) {
    case "UPDATE_WISHLIST":
      const updatedWishlist = action.payload.itemInWishlist
        ? removeFromWishlist(userState.userWishlist, action.payload.product)
        : addToWishlist(userState.userWishlist, action.payload.product);

      return {
        ...userState,
        userWishlist: updatedWishlist,
      };
    default:
      return userState;
  }
};
