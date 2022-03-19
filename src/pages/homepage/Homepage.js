import "./Homepage.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

import { HeroSection } from "./HeroSection";
import { Categories } from "./Categories";
import { Collections } from "./Collections";

export const Homepage = () => {
  return (
    <div className="wrapper justify-between">
      <NavBar />

      <main>
        <HeroSection />

        <div className="home-heading">Choose your category</div>

        <Categories />

        <div class="home-heading">Find latest collections here</div>
        <Collections />
      </main>

      <Footer />
    </div>
  );
};
