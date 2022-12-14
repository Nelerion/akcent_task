import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/slices/hooks";
import { cleanBusket } from "../../store/slices/productSlice";
import { useNavigate } from "react-router-dom";
import BusketCard from "./busketCard";
const Busket = () => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState<boolean>(false);
  const busket = useAppSelector((state) => state.prod.busket);
  let navigate = useNavigate();
  const price = busket.reduce((acc, val) => {
    return acc + val?.price?.value;
  }, 0);

  const result: any = {};

  busket.forEach((product) => {
    if (result[product.id]) {
      result[product.id] = {
        ...result[product.id],
        count: result[product.id].count + 1,
        title: product.title,
        price: product.price,
        image: product.image,
        brand: product.brand,
        key: product.key,
        id: product.id,
      };
    } else {
      result[product.id] = {
        ...result[product.id],
        title: product.title,
        price: product.price,
        image: product.image,
        brand: product.brand,
        key: product.key,
        id: product.id,
        count: 1,
      };
    }
  });
  const arr: any[] = Object.values(result);

  const postBusket = async () => {
    try {
      const res = await fetch("https://app.aaccent.su/js/confirm.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(123),
      });
      const json = await res.json();
      if (json.result === "ok") {
        setModal((prev) => !prev);
      }
    } catch (error) {}
  };

  const clean = () => {
    dispatch(cleanBusket());
    return navigate("/");
  };
  
  return (
    <div className="container">
      <div className="busket__container">
        {modal && (
          <div className="modalBG">
            <div className="modal">
              <p>Заказ отправлен на обработку!</p>
              <button onClick={clean}>Закрыть</button>
            </div>{" "}
          </div>
        )}
        <div className="busket__header">
          <div className="product__info">
            <span>Товаров: {busket.length} шт.</span>
            <span>
              Цена: <span className="busket__price">{price.toFixed(2)} $ </span>
            </span>
          </div>
          <div className="busket__form">
            <input type="text" placeholder="Ваше имя" />
            <input type="tel" name="tel" placeholder="Номер телефона" />
            <button onClick={postBusket}>Оформить заказ</button>
          </div>
        </div>
        <div className="busket__product-list">
          {arr &&
            arr.map((product) => {
              return (
                <BusketCard
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                  image={product.image}
                  id={product.id}
                  key={product.key}
                  uuid={product.key}
                  count={product.count}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Busket;
