import "./Homepage.css";
import { NavBar, Footer } from "../../components";

import { HeroSection } from "./HeroSection";
import { Categories } from "./Categories";
import { Brands } from "./Brands";

export const Homepage = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar />

      <main>
        <HeroSection />

        <div className="home-heading txt-center">Shop by Category</div>

        <Categories />

        <div className="home-heading txt-center">Shop by brands</div>
        <Brands />
      </main>

      <Footer />
    </div>
  );
};
