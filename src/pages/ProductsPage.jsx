import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../component/Layout/Header";
import { useSearchParams } from "react-router-dom";
// import { productData } from "../static/data";
import ProductCard from "../component/Route/ProductCard/ProductCard";
import Footer from "../component/Layout/Footer";
import styles from "../styles/Style";

const ProductsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      // const d =
      //   allProducts && allProducts.sort((a, b) => a.sold_out - b.sold_out);
      const d = allProducts;
      setData(d);
    } else {
      const d =
        allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [allProducts]);
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
