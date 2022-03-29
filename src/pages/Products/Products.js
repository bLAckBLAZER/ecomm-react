import { Footer, NavBar } from "../../components";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";

export const Products = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar />
      <main className="flex flex-1">
        <Filters />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};
