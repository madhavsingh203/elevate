import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Loader from "./components/Loader/Loader";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState([]);

  const fetchAllProducts = async () => {
    setIsLoading(true);
    try {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setAllProducts(json));
      setIsLoading(false);
      enqueueSnackbar("Items Loaded Successfully", { variant: "success" });
      return allProducts;
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <Dashboard
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
