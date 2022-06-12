import "./Homepage.css";
import { HeroSection } from "./HeroSection";
import { Categories } from "./Categories";
import { Brands } from "./Brands";

export const Homepage = () => {
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
