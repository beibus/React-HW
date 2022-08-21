import './Card.css'


export default function Card({title, description, price, image}) {
  return (
    <div className="card-wrapper">
      <div className='card-image-wrapper'>
        <img src={image} alt="" /> 
      </div>
      <div className='description-wrapper'>
        <h4 className="title">{title}</h4>
        <h4 className="description">{description}</h4>
        <h4 className="price">{price}</h4>
      </div>
    </div>
  )
}