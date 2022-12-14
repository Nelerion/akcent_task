import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Busket from "./pages/busket/busket";
import ProductList from "./pages/productList/productList";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/busket" element={<Busket />} />
      </Routes>
    </div>
  );
}

export default App;
