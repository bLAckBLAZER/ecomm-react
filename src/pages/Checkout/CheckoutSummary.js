import { Link, useNavigate } from "react-router-dom";
import { loadScript } from "../../utils/loadScript";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { useUser } from "../../contexts/UserContext";
import Logo from "../../assets/images/logo.png";

export const CheckoutSummary = ({
  userCart,
  selectedAddress,
  priceSummary,
}) => {
  const {
    totalItems,
    totalOriginalPrice,
    totalDiscount,
    totalDeliveryCharges,
    totalCartPrice,
  } = priceSummary;

  const { id, name, address, city, pincode, state } = selectedAddress || {};
  const navigate = useNavigate();
  const { userDispatch } = useUser();

  const paymentSuccessHandler = (response) => {
    toast.success("Payment completed Successfully!", {
      position: "bottom-center",
    });

    const orderDetails = {
      orderId: uuid(),
      razorPayOrderId: response.razorpay_order_id,
      razorPayPaymentId: response.razorpay_payment_id,
      itemsOrdered: [...userCart],
      priceSummary: priceSummary,
      deliveryAddress: selectedAddress,
    };

    userDispatch({ type: "SET_CART", payload: [] });

    navigate("/orderComplete", { state: { orderDetails } });
  };

  const paymentHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Failed to initiate payment. Please try again!", {
        position: "bottom-center",
      });
    }

    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: totalCartPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Sneakoholics",
      description: "Thanks for choosing Sneakoholics",
      image: Logo,
      handler: paymentSuccessHandler,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      toast.error(response.error.description, {
        position: "bottom-center",
      });
    });

    rzp1.open();
  };

  return (
    <div className="cart-pricing">
      <div className="price-heading">Ordered Items</div>
      <hr />
      <ul className="flex flex-col">
        {userCart.map((item) => (
          <li className="flex justify-between price-subheading" key={item.id}>
            <div>{item.title}</div>
            <div>{`₹ ${item.originalPrice}`}</div>
          </li>
        ))}
      </ul>
      <div className="price-heading">Price Details</div>
      <hr />
      <ul className="flex flex-col">
        <li className="flex justify-between price-subheading">
          <div>{`Price(${totalItems} Items)`}</div>
          <div>{`₹ ${totalOriginalPrice}`}</div>
        </li>
        <li className="flex justify-between price-subheading">
          <div>Discount</div>
          <div>{`- ₹ ${totalDiscount}`}</div>
        </li>
        <li className="flex justify-between price-subheading">
          <div>Delivery Charges</div>
          <div>{`₹ ${totalDeliveryCharges}`}</div>
        </li>
      </ul>
      <hr />
      <div className="flex justify-between">
        <div className="price-heading">Total Amount</div>
        <div className="price-heading">{`₹ ${totalCartPrice}`}</div>
      </div>
      <hr />
      <div className="price-subheading">{`You will save ₹ ${totalDiscount} on this order!`}</div>
      <div className="price-heading">Deliver to</div>
      <hr />
      {selectedAddress && (
        <div>
          <div className="h3">{name}</div>
          <div>{address?.line1}</div>
          <div>{address?.line2}</div>
          <div>{address?.line3}</div>
          <div>{`${city}, ${pincode}, ${state}`}</div>
        </div>
      )}

      <button
        className={`btn btn-primary mg-y-1 ${!selectedAddress && "disabled"}`}
        onClick={() => paymentHandler()}
      >
        Make Payment
      </button>
    </div>
  );
};
