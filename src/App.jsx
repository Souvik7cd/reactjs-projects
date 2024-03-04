import './App.css'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/random-color/RandomColor'
import StarRating from './components/star-rating/StarRating'

function App() {

  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
