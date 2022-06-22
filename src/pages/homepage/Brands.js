import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContext";
import { productDefaultState } from "../../contexts/productDefaultStates";

export const Brands = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useProduct();

  const onBrandClick = (brandName) => {
    dispatch({ type: "RESET", payload: productDefaultState });
    dispatch({ type: "BRAND_CHANGE", payload: brandName });
    navigate("/products");
  };

  return (
    <div className="grid-4-col">
      <div
        className="brand flex justify-ctr align-ctr"
        onClick={() => onBrandClick("nike")}
      >
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759383/Ecommerce%20App/Brand%20Images/nike_kxiqjq.jpg"
          alt="nike"
          className="img img-round"
        />
      </div>
      <div
        className="brand flex justify-ctr align-ctr"
        onClick={() => onBrandClick("adidas")}
      >
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759570/Ecommerce%20App/Brand%20Images/adidas_i9vm5m.jpg"
          alt="adidas"
          className="img img-round"
        />
      </div>
      <div
        className="brand flex justify-ctr align-ctr"
        onClick={() => onBrandClick("puma")}
      >
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759722/Ecommerce%20App/Brand%20Images/puma_kp4vu8.png"
          alt="puma"
          className="img img-round"
        />
      </div>
      <div
        className="brand flex justify-ctr align-ctr"
        onClick={() => onBrandClick("asics")}
      >
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759678/Ecommerce%20App/Brand%20Images/asics_llrmom.jpg"
          alt="asics"
          className="img img-round"
        />
      </div>
    </div>
  );
};
