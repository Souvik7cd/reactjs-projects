import './App.css'
import Accordion from './components/accordion/Accordion'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMore from './components/load-more/LoadMore'
import RandomColor from './components/random-color/RandomColor'
import StarRating from './components/star-rating/StarRating'

function App() {

  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10}/>
      <ImageSlider url="https://picsum.photos/v2/list" page={10} limit={10}/>
      <LoadMore url="https://dummyjson.com/products" limit={20} />
    </>
  )
}

export default App
