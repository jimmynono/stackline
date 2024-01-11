import { useSelector } from 'react-redux'
import useGetData from '../hooks/useGetData'
import './ProductDetails.css'
import { Header } from '../components/Header/Header'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { ProductDataContainer } from '../components/ProductData/ProductDataContainer/ProductDataConatiner'

function ProductDetails() {
  const {loading} = useGetData()

  const data = useSelector(state => state.dataReducer.data)

  console.log(data)

  return (
    <>
    <Header />
    {loading ? <h1>Loading...</h1> :     <main>
      <ProductCard image={data[0].image} title={data[0].title} subtitle={data[0].subtitle} tags={data[0].tags} />
      <ProductDataContainer data={data[0]} />
    </main>
}
    </>
  )
}

export default ProductDetails
