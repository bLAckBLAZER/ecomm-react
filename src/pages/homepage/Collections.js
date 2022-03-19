import { Link } from "react-router-dom";

export const Collections = () => {
  return (
    <div class="home-collections">
      <Link to={{ pathname: "/products" }}>
        <div class="collection" id="collection-1">
          <div class="collection-title">
            <div class="collection-heading h1">Winter Collection</div>
          </div>
        </div>
      </Link>
      <Link to={{ pathname: "/products" }}>
        <div class="collection" id="collection-2">
          <div class="collection-title">
            <div class="collection-heading h1">Summer Collection</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
