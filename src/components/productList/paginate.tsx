import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppSelector } from "../../store/slices/hooks";
import ProductCard from "./productCard";
interface IProduct {
  brand: number;
  id: number;
  image: string;
  regular_price: {
    currency: string;
    value: number;
  };
  sku: string;
  title: string;
  type: string;
}

function Items({ currentItems }: any) {
  return (
    <>
      {currentItems &&
        currentItems?.map((prod: IProduct) => {
          return (
            <ProductCard
              title={prod.title}
              brand={prod.brand}
              image={prod.image}
              price={prod.regular_price}
              id={prod.id}
              key={prod.id}
            />
          );
        })}
    </>
  );
}

export function PaginatedItems({ itemsPerPage }: any) {
  const filter = useAppSelector((state) => state?.prod?.filter);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filter.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % filter.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="pagination__block">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={undefined}
          className="pagination"
        />
      </div>
    </>
  );
}
