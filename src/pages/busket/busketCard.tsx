import { useAppDispatch } from "../../store/slices/hooks";
import { addBusket, remBusket } from "../../store/slices/productSlice";
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
  count: number;
  key: string;
  uuid: string;
}
const BusketCard = ({ title, id, price, brand, image, count, uuid }: Props) => {
  const dispatch = useAppDispatch();

  const add = () => {
    const uuid = uuidv4();
    dispatch(addBusket({ title, id, price, brand, image, key: uuid }));
  };
  const rem = () => {
    dispatch(remBusket(uuid));
  };
  return (
    <div className="busket__card">
      <div className="busket__image-block">
        <img
          src={require(`../../assets${image}`)}
          alt="title"
          className="busket__image"
        />
      </div>
      <div className="busket__info">
        <span>{title}</span>
        <span>brand:{brand}</span>
        <span className="busket__price">
          {price.currency} {price.value}
        </span>
        <span>{count} шт.</span>
        <button onClick={add} className="change__product-count">+</button>
        <button onClick={rem} className="change__product-count">-</button>
      </div>
    </div>
  );
};

export default BusketCard;
