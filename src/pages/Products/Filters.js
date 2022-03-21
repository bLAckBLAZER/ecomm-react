import "./Filters.css";

export const Filters = () => {
  return (
    <aside className="filters">
      <ul className="filter-list">
        <li className="filter-item">
          <div className="flex justify-between align-ctr">
            <div className="filter-heading">Filters</div>
            <button className="btn btn-link">Clear</button>
          </div>
        </li>
        <li className="filter-item">
          <div className="filter-heading">Price</div>

          <ul>
            <li>
              <input
                type="checkbox"
                id="below-1000"
                name="price-range"
                value="below-1000"
              />
              <label htmlFor="below-1000" className="filter-subheading">
                Below 1000
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="bet-1000-3000"
                name="price-range"
                value="bet-1000-3000"
              />
              <label htmlFor="bet-1000-3000" className="filter-subheading">
                1000 - 3000
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="bet-3000-7000"
                name="price-range"
                value="bet-3000-7000"
              />
              <label htmlFor="bet-3000-7000" className="filter-subheading">
                3000-7000
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="above-8000"
                name="price-range"
                value="above-8000"
              />
              <label htmlFor="above-8000" className="filter-subheading">
                Above 8000
              </label>
            </li>
          </ul>
        </li>

        <li className="filter-item">
          <div className="filter-heading">Category</div>
          <ul>
            <li>
              <input
                type="checkbox"
                id="sneaker"
                name="category"
                value="sneaker"
              />
              <label htmlFor="sneaker" className="filter-subheading">
                Sneakers
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="sandals"
                name="category"
                value="sandals"
              />
              <label htmlFor="sandals" className="filter-subheading">
                Sandals
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="flip-flops"
                name="category"
                value="flip-flops"
              />
              <label htmlFor="flip-flops" className="filter-subheading">
                Flip-flops
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="jordans"
                name="category"
                value="jordans"
              />
              <label htmlFor="jordans" className="filter-subheading">
                Jordans
              </label>
            </li>
          </ul>
        </li>

        <li className="filter-item">
          <div className="filter-heading">Rating</div>
          <ul>
            <li>
              <input type="radio" id="4-plus" name="rating" value="4-plus" />
              <label htmlFor="4-plus" className="filter-subheading">
                4 stars & above
              </label>
            </li>
            <li>
              <input type="radio" id="3-plus" name="rating" value="3-plus" />
              <label htmlFor="3-plus" className="filter-subheading">
                3 stars & above
              </label>
            </li>
            <li>
              <input type="radio" id="2-plus" name="rating" value="2-plus" />
              <label htmlFor="2-plus" className="filter-subheading">
                2 stars & above
              </label>
            </li>
            <li>
              <input type="radio" id="1-plus" name="rating" value="1-plus" />
              <label htmlFor="1-plus" className="filter-subheading">
                1 stars & above
              </label>
            </li>
          </ul>
        </li>

        <li className="filter-item">
          <div className="filter-heading">Sort by</div>
          <ul>
            <li>
              <input
                type="radio"
                id="descending"
                name="sorting"
                value="descending"
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
