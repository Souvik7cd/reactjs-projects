import './App.css'
import Accordion from './components/accordion/Accordion'
import CustomTabs from './components/custom-tabs/CustomTabs'
import GitHubProfileFinder from './components/github-profile-finder/GitHubProfileFinder'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMore from './components/load-more/LoadMore'
import ModalTest from './components/modal/ModalTest'
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator'
import RandomColor from './components/random-color/RandomColor'
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator'
import StarRating from './components/star-rating/StarRating'
import SwitchTheme from './components/switch-theme/SwitchTheme'
import TreeView from './components/tree-view/TreeView'

import {menus} from './components/tree-view/menus'

function App() {

  return (
    <>
      <ScrollIndicator />
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10}/>
      <ImageSlider url="https://picsum.photos/v2/list" page={10} limit={10}/>
      <LoadMore url="https://dummyjson.com/products" limit={20} />
      <TreeView menus={menus} />
      <QrCodeGenerator />
      <SwitchTheme />
      <CustomTabs />
      <ModalTest />
      <GitHubProfileFinder />
    </>
  )
}

export default App
