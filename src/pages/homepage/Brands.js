import { useNavigate } from "react-router-dom";

export const Brands = () => {
  const navigate = useNavigate();

  const onBrandClick = () => {
    navigate("/product");
  };

  return (
    <div className="grid-4-col">
      <div className="brand flex justify-ctr align-ctr" onClick={onBrandClick}>
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759383/Ecommerce%20App/Brand%20Images/nike_kxiqjq.jpg"
          alt="nike"
          className="img img-round"
        />
      </div>
      <div className="brand flex justify-ctr align-ctr" onClick={onBrandClick}>
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759570/Ecommerce%20App/Brand%20Images/adidas_i9vm5m.jpg"
          alt="adidas"
          className="img img-round"
        />
      </div>
      <div className="brand flex justify-ctr align-ctr" onClick={onBrandClick}>
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759722/Ecommerce%20App/Brand%20Images/puma_kp4vu8.png"
          alt="puma"
          className="img img-round"
        />
      </div>
      <div className="brand flex justify-ctr align-ctr" onClick={onBrandClick}>
        <img
          src="https://res.cloudinary.com/omjcloud/image/upload/v1647759678/Ecommerce%20App/Brand%20Images/asics_llrmom.jpg"
          alt="asics"
          className="img img-round"
        />
      </div>
    </div>
  );
};
