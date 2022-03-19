// import "./Homepage.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="hero-container">
      <section className="hero-title">
        <div className="hero-heading h1">Welcome to Sneakoholics!</div>
        <div className="hero-subheading h3">A world for Sneaker lovers</div>
        <Link to={"/products"}>
          <button className="btn btn-primary">Start Exploring</button>
        </Link>
      </section>
    </section>
  );
};
