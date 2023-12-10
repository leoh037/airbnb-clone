import './style.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from "./data"

function App() {
  
  const cardElements = cardData.map(item => {
    return <Card
      key={item.id} 
      item={item}
      //{...item} use this if you want React to automatically map the props to a json key/value pair for you
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
