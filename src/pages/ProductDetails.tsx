import { useSelector } from "react-redux";
import useGetData from "../hooks/useGetData";
import "./ProductDetails.css";
import { Header } from "../components/Header/Header";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { ProductDataContainer } from "../components/ProductData/ProductDataContainer/ProductDataConatiner";
import { Product, RootState } from "../types/ProductInfo";

function ProductDetails() {
  const { loading } = useGetData();

  const data: Product = useSelector(
    (state: RootState) => state.dataReducer.data,
  );

  return (
    <>
      <Header />
      <main className={loading ? "" : "active"}>
        {!loading && (
          <>
            <ProductCard
              image={data.image}
              title={data.title}
              subtitle={data.subtitle}
              tags={data.tags}
            />
            <ProductDataContainer data={data.sales} />
          </>
        )}
      </main>
    </>
  );
}

export default ProductDetails;
