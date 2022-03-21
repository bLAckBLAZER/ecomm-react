import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
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
