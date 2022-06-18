import { useLocation, Link } from "react-router-dom";

export const OrderComplete = () => {
  const {
    state: { orderDetails },
  } = useLocation();

  //   console.log("state in OrderCOmplete: ", state);
  const { id, name, address, city, pincode, state } =
    orderDetails.deliveryAddress;
  const {
    totalItems,
    totalOriginalPrice,
    totalDiscount,
    totalDeliveryCharges,
    totalCartPrice,
  } = orderDetails.priceSummary;

  return (
    <main className="flex-1">
      <div className="container">
        <div className="h3 txt-center">
          Thanks for shopping at Sneakoholics!
        </div>
        <hr />
        <section className="grid-2-col">
          <article className="flex flex-col justify-between">
            <div>
              <div className="h3">Ship to:</div>
              <div className="h3">{name}</div>
              <div>{address.line1}</div>
              <div>{address.line2}</div>
              <div>{address.line3}</div>
              <div>{`${city}, ${pincode}, ${state}`}</div>
            </div>
            <div className="flex-1 flex align-ctr justify-ctr">
              {" "}
              <Link to="/products" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          </article>
          <article>
            <div className="cart-pricing">
              <li className="flex justify-between price-subheading">
                <div>Order ID:</div>
                <div>{orderDetails.orderId}</div>
              </li>
              <div className="price-heading">Ordered Items</div>
              <hr />
              <ul className="flex flex-col">
                {orderDetails.itemsOrdered.map((item) => (
                  <li
                    className="flex justify-between price-subheading"
                    key={item.id}
                  >
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
            </div>
          </article>
        </section>
        <section className="flex flex-col cart-items align-ctr">
          <div className="h3" style={{ alignSelf: "flex-start" }}>
            Ordered Items:
          </div>
          {orderDetails.itemsOrdered.map(
            ({
              productImage,
              description,
              title,
              brand,
              price,
              originalPrice,
            }) => (
              <div
                className="card card-ecom card-horizontal card-shadow"
                style={{ height: "100%" }}
              >
                <div className="card-img">
                  <img
                    src={productImage}
                    alt={description}
                    className="img-res"
                  />
                </div>

                <div className="card-info">
                  <div className="card-heading">
                    <h2 className="card-title">{title}</h2>
                    <h4 className="card-subtitle">{brand}</h4>
                  </div>

                  <div className="card-price flex align-ctr">
                    <div className="h3">{`₹ ${price}/-`}</div>
                    <div className="txt-strike">{`₹ ${originalPrice}/-`}</div>
                  </div>

                  <p className="card-text">{description}</p>
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </main>
  );
};
