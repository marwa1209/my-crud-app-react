/** @format */

import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList } from "./data/data";
import Button from "./components/ui/Button";

function App() {
  /*___________ State___________*/
  const [isOpen, setIsOpen] = useState(false);
  /*___________ Handler___________*/

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  /*___________ Renders___________*/
  const renderProductsList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container  py-5 ">
      <Button bgClass="bg-red-700" onClick={openModal}>
        open Modal
      </Button>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {renderProductsList}
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="Add A New Product"
        >
          <Button
            bgClass="bg-indigo-700 hover:bg-indigo-800"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button bgClass="bg-indigo-700" onClick={closeModal}>
            Deactivate
          </Button>
        </Modal>
      </div>
    </main>
  );
}

export default App;
