import './App.css'
import Accordion from './components/accordion/Accordion'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMore from './components/load-more/LoadMore'
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator'
import RandomColor from './components/random-color/RandomColor'
import StarRating from './components/star-rating/StarRating'
import TreeView from './components/tree-view/TreeView'

import {menus} from './components/tree-view/menus'

function App() {

  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10}/>
      <ImageSlider url="https://picsum.photos/v2/list" page={10} limit={10}/>
      <LoadMore url="https://dummyjson.com/products" limit={20} />
      <TreeView menus={menus} />
      <QrCodeGenerator />
    </>
  )
}

export default App
