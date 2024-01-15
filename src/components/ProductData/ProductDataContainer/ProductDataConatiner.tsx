import { ProductGraph } from "../ProductGraph/ProductGraph";
import { ProductTable } from "../ProductTable/ProductTable";
import { SalesProps } from "../../../types/ProductInfo";

import "./ProductDataContainer.css";

export const ProductDataContainer = ({ data }: SalesProps) => {
  return (
    <div className="product-data-container">
      <ProductGraph data={data} />
      <ProductTable data={data} />
    </div>
  );
};
