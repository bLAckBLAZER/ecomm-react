export const ProductCard = ({ product }) => {
  const { productImage, description, title, brand, price, inStock } = product;

  return (
    <div className="product">
      <div className={`card card-ecom ${!inStock ? "pos-rel" : ""}`}>
        <div className="card-body">
          {!inStock ? (
            <div className="card-overlay">
              <div className="overlay-text">Out Of Stock</div>
            </div>
          ) : null}
          <div className="card-img">
            <img src={productImage} alt={description} className="img-res" />
          </div>
          <div className="card-heading">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-subtitle">{brand}</h4>
          </div>
          <p className="card-text">{`₹ ${price}/-`}</p>
        </div>
        <div className="card-footer">
          <div className="card-actions">
            <button className="btn btn-primary">Add to cart</button>
          </div>

          <div className="card-icons">
            <i className="far fa-heart" aria-hidden="true"></i>
            <i className="fas fa-share-alt" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
