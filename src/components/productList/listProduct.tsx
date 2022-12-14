import { useEffect } from "react";
import product from "../../assets/products.json";
import { useAppDispatch } from "../../store/slices/hooks";
import { getProduct } from "../../store/slices/productSlice";
import { PaginatedItems } from "./paginate";
const ListProduct = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProduct(product));
  }, []);

  return (
    <div className="ListProduct">
      <PaginatedItems itemsPerPage={6} />
    </div>
  );
};

export default ListProduct;
