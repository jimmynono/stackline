import './ProductCard.css'

export const ProductCard = ({image, title, subtitle, tags}) => {
  return (
    <div className="product-card">
      <div className='product-card_image-container'>
      <img className='product-card_image' src={image} alt="" />
      <h2>{title}</h2>
      <p className='product-card_subtitle'>{subtitle}</p>
      </div>
      <div className='product-card_tags-container'>
       {tags.map(tag => {
        return <p className='product-card_tag'>{tag}</p>
       })}
      </div>
    </div>
  )
}