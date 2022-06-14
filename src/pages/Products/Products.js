import { Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { useState } from "react";

export const Products = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="flex flex-1">
      <Filters showFilters={showFilters} />
      <ProductList />
      <button
        className="btn btn-float card-shadow"
        id="filter-toggle"
        onClick={() => setShowFilters(!showFilters)}
      >
        <i className="fas fa-filter"></i>
      </button>
    </main>
  );
};
