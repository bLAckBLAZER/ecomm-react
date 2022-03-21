import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await axios.get("/api/categories");

        setCategories(result.data.categories);

        console.log(categories);
      } catch (error) {
        console.log("ERROR!!!! - ", error);
      }
    };

    getCategories();
  }, []);

  const onCategoryClick = () => {
    navigate("/products");
  };

  return (
    <section className="grid-4-col home-categories">
      {categories.map(({ id, categoryName, categoryImage }) => (
        <div className="category" key={id} onClick={onCategoryClick}>
          <img
            src={categoryImage}
            alt={categoryName}
            className="img img-round"
          />
          <div className="category-name">{categoryName}</div>
        </div>
      ))}
    </section>
  );
};
