import FilterProduct from "../../components/productList/filterProduct";
import ListProduct from "../../components/productList/listProduct";

const ProductList = ()=>{
    return(
        <main className="container products">
            <FilterProduct/>
            <ListProduct/>
        </main>
    )
}

export default ProductList;