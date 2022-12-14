import brand from "../../assets/brands.json";
import { useAppDispatch} from "../../store/slices/hooks";
import {
  changeFilter,
  cleanFilter,
  filter,
} from "../../store/slices/productSlice";
const FilterProduct = () => {
  const dispatch = useAppDispatch();
  const checkFilter = (value: number) => {
    dispatch(changeFilter(value));
  };
  const filterProduct = () => {
    dispatch(filter());
  };
  const clean = () => {
    dispatch(cleanFilter());
  };

  return (
    <div className="filterProduct">
      <div className="filter__brands">
        <span>Бренды</span>
        {brand.map((name) => {
          return (
            <div key={name.id}>
              <input
                type="checkbox"
                value={name.title.slice(-1)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  checkFilter(+e.target.value);
                }}
              />
              {name.title}
            </div>
          );
        })}
        <div className="filter__action">
          <button className="btn__filter" onClick={filterProduct}>
            Применить
          </button>
          <span className="icon-close close" onClick={clean}>
            Сбросить
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
function cleanFilters(): any {
  throw new Error("Function not implemented.");
}
