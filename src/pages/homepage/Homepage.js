import "./Homepage.css";
import { HeroSection } from "./HeroSection";
import { Categories } from "./Categories";
import { Brands } from "./Brands";
import { useTopScroll } from "../../utils/hooks";

export const Homepage = () => {
  useTopScroll();
  return (
    <main>
      <HeroSection />

      <div className="home-heading txt-center">Shop by Category</div>

      <Categories />

      <div className="home-heading txt-center">Shop by brands</div>
      <Brands />
    </main>
  );
};
