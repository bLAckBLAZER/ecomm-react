import "./ShadowBox.css";

export const ShadowBox = ({ children, className }) => {
  return (
    <div className={`shadow-box card-shadow ${className}`}>{children}</div>
  );
};
