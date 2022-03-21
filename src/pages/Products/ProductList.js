import axios from "axios";
import { useState, useEffect } from "react";
import "./ProductList.css";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("/api/products");

      setProductList(res.data.products);
    };

    getAllProducts();
  });

  return (
    <div className="flex flex-col flex-1 product-list">
      <div className="product-heading">
        Showing all products
        <span className="product-subheading">(20 products per page)</span>
      </div>
      <div className="grid-5-col">
        {productList.map((product) => (
          <div className="product">
            <div className="card card-ecom">
              <div className="card-body">
                <div className="card-img">
                  <img
                    src={product.productImage}
                    alt={product.description}
                    className="img-res"
                  />
                </div>
                <div className="card-heading">
                  <h2 className="card-title">{product.title}</h2>
                  <h4 className="card-subtitle">{product.brand}</h4>
                </div>
                <p className="card-text">{`₹ ${product.price}/-`}</p>
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
        ))}
      </div>
    </div>
  );
};
