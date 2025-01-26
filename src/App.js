import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import FilterButtons from "./components/FilterButton";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFilterChange = (category) => {
    setCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div style={{ padding: "16px" }}>
      <FilterButtons selectedCategory={category} onFilterChange={handleFilterChange} />
      {loading ? (
        <Spinner />
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;