import Card from "../../components/Card/Card"
import jersey from '../../images/jersey.png'

import './CardsContainer.css'
export const CardsContainer = () => {
console.log(jersey);

  const Jerseys = [
    {
      title: 'LeBron James Lakers City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '$290',
      image: jersey
    },
    {
      title: 'LeBron James Lakers City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '$290',
      image: jersey

    }, 
    {
      title: 'LeBron James Lakers City Edition',
      description: 'Nike NBA Swingman Jersey',
      price: '$290',
      image: jersey

    },
  ]

  return (
    <div className="cards-container">
        {
          Jerseys.map(item => (
            <Card 
            title={item.title} 
            description={item.description} 
            price={item.price} 
            image={item.image}/>
          ))
        }
    </div>
  )
}