import { ProductGraph } from "../ProductGraph/ProductGraph"
import { ProductTable } from "../ProductTable/ProductTable"
import './ProductDataContainer.css'

export const ProductDataContainer = ({data}) => {
  return (
    <div className="product-data-container">
    <ProductGraph data={data} />
    <ProductTable data={data} /></div>
  )
}