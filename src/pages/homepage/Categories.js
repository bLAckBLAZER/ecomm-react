import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <section className="home-categories">
      {categories.map(({ id, categoryName, categoryImage }) => (
        <Link to={{ pathname: "/products" }}>
          <div className="category" key={id}>
            <img src={categoryImage} alt="" className="img category-img" />
            <div className="category-name">{categoryName}</div>
          </div>
        </Link>
      ))}
    </section>
  );
};
