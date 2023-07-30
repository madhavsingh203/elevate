import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Dashboard.css";
import HeroSection from "../HeroSection/HeroSection";
import { useSnackbar } from "notistack";
import Loader from "../Loader/Loader";

const Dashboards = ({
  allProducts,
  setAllProducts,
  isLoading,
  setIsLoading,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  let products = [...allProducts];
  const [searchTerm, setSearchTerm] = useState("");
  const handleCategory = async (e) => {
    setIsLoading(true);
    try {
      let URL = "";
      if (e.target.value === "categories") {
        URL = `https://fakestoreapi.com/products`;
      } else {
        URL = `https://fakestoreapi.com/products/category/${e.target.value}`;
      }
      await fetch(URL)
        .then((res) => res.json())
        .then((json) => setAllProducts(json));
      setIsLoading(false);
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

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    //   console.log(searchTerm)
  };

  let copyProducts = [...allProducts];

  products = copyProducts.filter((data) =>
    `${data.title}${data.description}${data.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="hero-section">
        <HeroSection
          handleCategory={handleCategory}
          handleSearch={handleSearch}
        />
      </div>
      <div className="products-container">
        {isLoading ? (
          <Loader />
        ) : (
          products.map((data, index) => (
            <ProductsCard key={index} data={data} />
          ))
        )}
      </div>
    </>
  );
};

export default Dashboards;
