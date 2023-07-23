import "./categories-catalog.styles.scss";
import categories from "../../categories.json";
import CategoryItem from "../category-item/category-item.component.jsx";

const CategoriesCatalog = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesCatalog;
