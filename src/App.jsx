import './style.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from "./data"

function App() {
  
  const cardElements = cardData.map(card => {
    return <Card
      key={card.id} 
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
      status={card.openSpots}
    />
  })

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <div className='cardsContainer'>
        {cardElements}
      </div>
    </div>
  )
}

export default App;
