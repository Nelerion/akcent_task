import { useAppDispatch } from "../../store/slices/hooks";
import { addBusket } from "../../store/slices/productSlice";
import { v4 as uuidv4 } from "uuid";
interface Props {
  title: string;
  id: number;
  price: {
    currency: string;
    value: number;
  };
  brand: number;
  image: string;
}
const ProductCard = ({ title, id, price, brand, image }: Props) => {
  const dispatch = useAppDispatch();
  
  const addProductToBusket = () => {
    const key = uuidv4();
    dispatch(addBusket({ id, price, title, image, brand, key }));
  };

  return (
    <div className="Card" onClick={addProductToBusket}>
      <div className="prod__img-block">
        <img
          src={require(`../../assets${image}`)}
          alt={title}
          className="prod__img"
        />
      </div>
      <div className="card__info">
        <div className="card__title-brand">
          <span className="card__title">{title}</span>
          <span className="card__brand">brand:{brand}</span>
        </div>
        <div className="card__price">
          <span className="card__usd">{price.currency}</span>
          <span className="card__value">{price.value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
