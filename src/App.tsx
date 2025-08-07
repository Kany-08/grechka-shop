import "./App.css";
import { AppProvider } from "./components/AppProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductList } from "./components/ProductList/ProductList";
import { products } from "./data/products";

function App() {
  return (
    <AppProvider>
      <Cart />
      <ProductList products={products} />
    </AppProvider>
  );
}

export default App;
