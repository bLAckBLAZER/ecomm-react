import axios from "axios";
import { useState, useEffect } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { ProductCard } from "../../components";
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
        {filteredProducts.length === productList.length
          ? "Showing all products"
          : "Showing filtered products"}
        <span className="product-subheading">{` (${filteredProducts.length} products)`}</span>
      </div>
      {filteredProducts.length === 0 && <div className="h3 flex-1 flex align-ctr justify-ctr">No products found!</div>}
      <div className="grid-5-col">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
