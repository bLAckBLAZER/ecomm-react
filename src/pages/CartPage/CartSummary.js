export const CartSummary = ({ userCart }) => {
  const calculateTotals = (acc, curr) => {
    return {
      ...acc,
      totalItems: acc.totalItems + curr.qtyOrdered,
      totalOriginalPrice:
        acc.totalOriginalPrice + curr.originalPrice * curr.qtyOrdered,
      totalSellingPrice: acc.totalSellingPrice + curr.price * curr.qtyOrdered,
      totalDiscount:
        acc.totalDiscount + (curr.originalPrice - curr.price) * curr.qtyOrdered,
      totalDeliveryCharges: acc.totalDeliveryCharges + curr.deliveryCharge,
    };
  };

  const {
    totalItems,
    totalOriginalPrice,
    totalSellingPrice,
    totalDiscount,
    totalDeliveryCharges,
  } = userCart.reduce(calculateTotals, {
    totalItems: 0,
    totalOriginalPrice: 0,
    totalSellingPrice: 0,
    totalDiscount: 0,
    totalDeliveryCharges: 0,
  });

  const totalCartPrice = totalSellingPrice + totalDeliveryCharges;

  return (
    <div className="cart-pricing">
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

      <button
        className="btn btn-primary"
        onClick={() => alert("Order successfully placed!!")}
      >
        Place Order
      </button>
    </div>
  );
};
