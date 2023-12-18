import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProductsGrid from "./ProductsGrid";
import Skeleton from "@mui/material/Skeleton";

function ProductsSection() {
  const apiURL = "https://slash-backend.onrender.com/product";

  // State to store the fetched products
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Ref for the select element
  const select = useRef(null);

  // Fetch products from the API on initial render
  useEffect(() => {
    const fetchProducts = async () => {
      axios
        .get(apiURL)
        .then((res) => {
          setProducts(res.data.data);
          setFetching(false);
        })
        .catch((e) => console.log(e));
    };

    fetchProducts();
  }, []);

  // Function to handle sorting of products
  const handleSort = (e) => {
    let sortingOrder = e.target.value;
    let tempArray = [...products];
    if (sortingOrder === "lth") {
      // Sort products by price Low to High
      tempArray.sort((a, b) => a.ProductVariations[0].price - b.ProductVariations[0].price);
    } else {
      // Sort products by price High to Low
      tempArray.sort((a, b) => b.ProductVariations[0].price - a.ProductVariations[0].price);
    }
    setProducts(tempArray);
  };

  return (
    <div className="bg-[#f1f1ef] py-6 px-3 md:px-8 md:pb-12 md:pt-6">
      <div className="bg-white p-8">
        {/* Section Title */}
        <h2 className="text-[#314584] text-3xl sm:text-4xl font-bold mb-6">Products</h2>
        {/* Product Count and Sort Dropdown */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center sm:justify-between mb-8">
          <span className="text-[#979a9b] lg:text-xl">Showing all {products.length} results</span>
          {/* Dropdown to sort products */}
          <div className="flex flex-row items-center space-x-3">
            <span className="text-[#979a9b] lg:text-xl">Sort By: </span>
            <select ref={select} onChange={handleSort} name="Sort Products" id="" className="lg:text-xl border-2 border-[#e6e6e6] py-2 text-[#666] focus:outline-none sm:w-[300px]">
              <option value="">Default</option>
              <option value="lth">Price Low To High</option>
              <option value="htl">Price High To Low</option>
            </select>
          </div>
        </div>
        {/* Displaying the grid of products */}
        {fetching ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
          <Skeleton variant="rectangle" animation="wave" width="100%" height={300}/>
        </div> : <ProductsGrid cardsInfo={products} />}
      </div>
    </div>
  );
}

export default ProductsSection;
