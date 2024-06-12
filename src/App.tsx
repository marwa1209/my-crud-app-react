/** @format */

import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data/data";

function App() {
  // Renders
  const renderProductsList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 container  py-5 ">
      {renderProductsList}
      <Modal/>
    </main>
  );
}

export default App;
