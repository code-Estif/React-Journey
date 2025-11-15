function ProductCard({ name, price, desc, img }) {
    return (
      <div className="product-card">
        <img src={img} width="150" />
        <h3>{name}</h3>
        <p>{desc}</p>
        <h4>${price}</h4>
      </div>
    )
  }
  
  export default ProductCard  