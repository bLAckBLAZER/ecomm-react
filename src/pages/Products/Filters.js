import { useEffect, useState } from "react";
import "./Filters.css";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useProduct } from "../../contexts/ProductContext";
import { productDefaultState } from "../../contexts/productDefaultStates";
import { isCategorySelected } from "../../utils/isCategorySelected";

export const Filters = () => {
  const { state, dispatch } = useProduct();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await axios.get("/api/categories");

        setCategories(result.data.categories);
      } catch (error) {
        console.log("ERROR!!!! - ", error);
      }
    };

    getCategories();
  }, []);

  return (
    <aside className="filters">
      <ul className="filter-list">
        {/* Clear all filters */}
        <li className="filter-item">
          <div className="flex justify-between align-ctr">
            <div className="filter-heading">Filters</div>
            <button
              className="btn btn-link"
              onClick={() =>
                dispatch({ type: "RESET", payload: productDefaultState })
              }
            >
              Clear
            </button>
          </div>
        </li>
        {/* Price range */}
        <li className="filter-item">
          <div className="filter-heading">Price</div>

          <div className="range">
            <input
              type="range"
              id="price-range"
              name="price-range"
              min="0"
              max="50000"
              step="1000"
              value={state.maxRange}
              onChange={(e) =>
                dispatch({ type: "PRICE_RANGE", payload: e.target.value })
              }
            ></input>

            <div className="flex">
              <div style={{ marginRight: "1rem" }}>{`Min: 0`}</div>
              <div>{`Max: ${state.maxRange}`}</div>
            </div>
          </div>
        </li>
        {/* Out of Stock */}
        <li className="filter-item">
          <div>
            <input
              type="checkbox"
              name="outOfStock"
              value="outOfStock"
              id="outOfStock"
              checked={state.includeOutOfStock}
              onChange={() => dispatch({ type: "OUT_OF_STOCK" })}
            />
            <label htmlFor="outOfStock" className="filter-subheading">
              Include Out of Stock
            </label>
          </div>
        </li>
        {/* Cateogories */}
        <li className="filter-item">
          <div className="filter-heading">Category</div>

          <ul>
            {categories.map((category) => (
              <li>
                <input
                  type="checkbox"
                  name="category"
                  key={category.categoryName}
                  value={category.categoryName}
                  id={category.categoryName}
                  checked={isCategorySelected(
                    state.selectedCategories,
                    category._id
                  )}
                  onChange={() =>
                    dispatch({ type: "CATEGORY_CHANGE", payload: category })
                  }
                />
                <label
                  htmlFor={category.categoryName}
                  className="filter-subheading"
                >
                  {category.categoryName}
                </label>
              </li>
            ))}
          </ul>
        </li>
        {/* Brands */}
        <li className="filter-item">
          <div className="filter-heading">Brands</div>

          <ul>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="nike"
                id="nike"
                checked={state.selectedBrands.includes("nike")}
                onChange={() =>
                  dispatch({ type: "BRAND_CHANGE", payload: "nike" })
                }
              />
              <label htmlFor="nike" className="filter-subheading">
                Nike
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="adidas"
                id="adidas"
                checked={state.selectedBrands.includes("adidas")}
                onChange={() =>
                  dispatch({ type: "BRAND_CHANGE", payload: "adidas" })
                }
              />
              <label htmlFor="adidas" className="filter-subheading">
                Adidas
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="puma"
                id="puma"
                checked={state.selectedBrands.includes("puma")}
                onChange={() =>
                  dispatch({ type: "BRAND_CHANGE", payload: "puma" })
                }
              />
              <label htmlFor="puma" className="filter-subheading">
                Puma
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                name="brand"
                value="asics"
                id="asics"
                checked={state.selectedBrands.includes("asics")}
                onChange={() =>
                  dispatch({ type: "BRAND_CHANGE", payload: "asics" })
                }
              />
              <label htmlFor="asics" className="filter-subheading">
                Asics
              </label>
            </li>
          </ul>
        </li>
        {/* Rating */}
        <li className="filter-item">
          <div className="filter-heading">Rating</div>
          <ul>
            <li>
              <input
                type="radio"
                id="4-plus"
                name="rating"
                value="4-plus"
                checked={state.selectedRating === 4}
                onChange={() => dispatch({ type: "RATING", payload: 4 })}
              />
              <label htmlFor="4-plus" className="filter-subheading">
                4 stars & above
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="3-plus"
                name="rating"
                value="3-plus"
                checked={state.selectedRating === 3}
                onChange={() => dispatch({ type: "RATING", payload: 3 })}
              />
              <label htmlFor="3-plus" className="filter-subheading">
                3 stars & above
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="2-plus"
                name="rating"
                value="2-plus"
                checked={state.selectedRating === 2}
                onChange={() => dispatch({ type: "RATING", payload: 2 })}
              />
              <label htmlFor="2-plus" className="filter-subheading">
                2 stars & above
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="1-plus"
                name="rating"
                value="1-plus"
                checked={state.selectedRating === 1}
                onChange={() => dispatch({ type: "RATING", payload: 1 })}
              />
              <label htmlFor="1-plus" className="filter-subheading">
                1 stars & above
              </label>
            </li>
          </ul>
        </li>
        {/* Sort by Price */}
        <li className="filter-item">
          <div className="filter-heading">Sort by</div>
          <ul>
            <li>
              <input
                type="radio"
                id="descending"
                name="sorting"
                value="descending"
                checked={state.sortByPrice === "HIGH_TO_LOW"}
                onChange={() =>
                  dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
                }
              />
              <label htmlFor="descending" className="filter-subheading">
                Price - High to Low
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="ascending"
                name="sorting"
                value="ascending"
                checked={state.sortByPrice === "LOW_TO_HIGH"}
                onChange={() =>
                  dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
                }
              />
              <label htmlFor="ascending" className="filter-subheading">
                Price - Low to High
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};
