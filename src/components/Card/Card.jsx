
export default function Card({title, description, price, image}) {
  return (
    <div>
      <div>
        <img src={image} alt="" /> 
      </div>
      <div>
        <h4>{title}</h4>
        <h4>{description}</h4>
        <h4>{price}</h4>
      </div>
    </div>
  )
}