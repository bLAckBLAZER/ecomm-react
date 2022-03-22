import axios from "axios";
import { useState, useEffect } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

import {
  sortByPrice,
  filterBrands,
  filterCategory,
  filterOutOfStock,
  filterPriceRange,
  filterRatings,
} from "../../utils/filterFunctions";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const { state, dispatch } = useProduct();

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("/api/products");

      setProductList(res.data.products);
    };

    getAllProducts();
  }, []);

  const filterFunctions = [
    sortByPrice,
    filterBrands,
    filterCategory,
    filterOutOfStock,
    filterPriceRange,
    filterRatings,
  ];

  const filteredProducts = filterFunctions.reduce(
    (acc, curr) => curr(state, acc),
    productList
  );

  return (
    <div className="flex flex-col flex-1 product-list">
      <div className="product-heading">
        Showing all products
        <span className="product-subheading">(20 products per page)</span>
      </div>
      <div className="grid-5-col">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
