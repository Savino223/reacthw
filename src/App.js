import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    category: "Category 1",
    price: 200,
    img: "https://www.dea.gov/sites/default/files/styles/large/public/2023-03/Crack%20cocaine%201.jpg?h=0814d6e6&itok=NZJqnc5p"
  },
  {
    id: 0,
    name: "Product 2",
    category: "Category 1",
    price: 200,
    img: "https://www.dea.gov/sites/default/files/styles/large/public/2023-03/Crack%20cocaine%201.jpg?h=0814d6e6&itok=NZJqnc5p"
  }
]

function App() {
  return (
    <div>
      {
        products.map((product) => (
          <ProductCard data={product}/>
      ))}
    </div>
  );
}

export default App;