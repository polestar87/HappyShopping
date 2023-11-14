import { CategoriesType } from "../types";

type CategoriesPropsType = {
  categories: CategoriesType
}

const Categories = (props: CategoriesPropsType) => {
  const { categories } = props;
  return (
    <div className="category">
      {(categories || []).map((item) => {
        return (
          <div className="category-item" key={item.id}>
            <img className="category-item-img" src={item.url} alt={item.name} />
            <p className="category-item-desc">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
