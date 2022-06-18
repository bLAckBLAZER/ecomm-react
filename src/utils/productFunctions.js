import axios from "axios";
import { isPresentInList } from "./isPresentInList";
import toast from "react-hot-toast";

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
      toast.success("Item added to wishlist!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Item not added to wishlist. Please try again!", {
        position: "bottom-center",
      });
      console.error("Add to wishlist call failed with status: ", res.status);
    }
  } catch (error) {
    toast.error("Item not added to wishlist. Please try again!", {
      position: "bottom-center",
    });
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
      toast.success("Item removed from wishlist!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Item not removed from wishlist. Please try again!", {
        position: "bottom-center",
      });
      console.error(
        "Remove from wishlist call failed with status: ",
        res.status
      );
    }
  } catch (error) {
    toast.error("Item not removed from wishlist. Please try again!", {
      position: "bottom-center",
    });
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
  toast.success("Item moved to wishlist!", {
    position: "bottom-center",
  });
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

export const getUserCart = async ({ token, userDispatch }) => {
  try {
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      userDispatch({ type: "SET_CART", payload: res.data.cart });
    } else {
      console.error("Unsuccessful get call on cart, res status:", res.status);
    }
  } catch (err) {
    console.error(err);
  }
};

export const addToCart = async ({
  product,
  userState,
  userDispatch,
  token,
}) => {
  try {
    const isAddedInCart = isPresentInList(product._id, userState.userCart);

    if (isAddedInCart) {
      incrementCart({
        product,
        userDispatch,
        token,
      });
    } else {
      const res = await axios({
        method: "post",
        url: "/api/user/cart",
        data: {
          product,
        },
        headers: {
          authorization: token,
        },
      });

      if (res.status === 201) {
        userDispatch({ type: "ADD_TO_CART", payload: product });
        toast.success("Item added to cart!", {
          position: "bottom-center",
        });
      } else {
        toast.error("Add to cart failed. Please try again!", {
          position: "bottom-center",
        });
        console.error("Add to cart call failed with status: ", res.status);
      }
    }
  } catch (error) {
    toast.error("Add to cart failed. Please try again!", {
      position: "bottom-center",
    });
    console.error("Add to cart call failed: ", error);
  }
};

export const incrementCart = async ({ product, userDispatch, token }) => {
  try {
    const res = await axios({
      method: "post",
      url: `/api/user/cart/${product._id}`,
      data: {
        action: {
          type: "increment",
        },
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      userDispatch({ type: "INCREMENT_CART", payload: product });
    } else {
      console.error("Increment to cart call failed with status: ", res.status);
    }
  } catch (error) {
    console.error("Increment to cart call failed: ", error);
  }
};

export const decrementCart = async ({ product, userDispatch, token }) => {
  if (product.qtyOrdered === 1) {
    removeFromCart({ product, userDispatch, token });
  } else {
    try {
      const res = await axios({
        method: "post",
        url: `/api/user/cart/${product._id}`,
        data: {
          action: {
            type: "decrement",
          },
        },
        headers: {
          authorization: token,
        },
      });

      if (res.status === 200) {
        userDispatch({ type: "DECREMENT_CART", payload: product });
      } else {
        console.error(
          "decrement to cart call failed with status: ",
          res.status
        );
      }
    } catch (error) {
      console.error("decrement to cart call failed: ", error);
    }
  }
};

export const removeFromCart = async ({ product, userDispatch, token }) => {
  try {
    const res = await axios({
      method: "delete",
      url: `/api/user/cart/${product._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      userDispatch({ type: "REMOVE_FROM_CART", payload: product });
      toast.success("Item removed from cart!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Remove from cart failed. Please try again!", {
        position: "bottom-center",
      });
      console.error("Remove from cart call failed with status: ", res.status);
    }
  } catch (error) {
    toast.error("Remove from cart failed. Please try again!", {
      position: "bottom-center",
    });
    console.error("Remove from cart call failed: ", error);
  }
};
