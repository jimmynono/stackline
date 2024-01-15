import { SalesProps } from "../../../types/ProductInfo";
import "./ProductGraph.css";
import ProductSalesChart from "./ProductSalesChart";

export const ProductGraph = ({ data }: SalesProps) => {
  return (
    <div className="product-graph">
      <h2 className="product-graph_header">Retail Sales</h2>
      <ProductSalesChart data={data} />
    </div>
  );
};
