import axios from "axios";
import { isPresentInList } from "./isPresentInList";

export const addToWishlist = async ({ product, userDispatch, token }) => {
  try {
    const res = await axios({
      method: "post",
      url: "/api/user/wishlist",
      data: {
        product,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      userDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    } else {
      console.error("Add to wishlist call failed with status: ", res.status);
    }
  } catch (error) {
    console.error("Add to wishlist call failed: ", error);
  }
};

export const removeFromWishlist = async ({ product, userDispatch, token }) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/wishlist/${product._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200 || res.status === 201) {
      userDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
    } else {
      console.error(
        "Remove from wishlist call failed with status: ",
        res.status
      );
    }
  } catch (error) {
    console.error("Remove from wishlist call failed: ", error);
  }
};

export const moveToWishlist = ({ product, wishlist, userDispatch, token }) => {
  if (!isPresentInList(product._id, wishlist)) {
    addToWishlist({
      product,
      userDispatch,
      token: token,
    });
  }
  userDispatch({ type: "REMOVE_FROM_CART", payload: product });
};

export const getUserWishlist = async ({ token, userDispatch }) => {
  try {
    const res = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      userDispatch({ type: "SET_WISHLIST", payload: res.data.wishlist });
    } else {
      console.error(
        "Unsuccessful get call on wishlist, res status:",
        res.status
      );
    }
  } catch (err) {
    console.error(err);
  }
};
