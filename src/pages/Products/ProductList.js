import axios from "axios";
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("/api/products");

      setProductList(res.data.products);
    };

    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col flex-1 product-list">
      <div className="product-heading">
        Showing all products
        <span className="product-subheading">(20 products per page)</span>
      </div>
      <div className="grid-5-col">
        {productList.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
