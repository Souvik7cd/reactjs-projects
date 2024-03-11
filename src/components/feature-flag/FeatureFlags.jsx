import Accordion from '../accordion/Accordion';

const FeatureFlags = () => {

  const componentsToRender = [
    {
      key: 'showAccordion',
      component: <Accordion />
    }
  ]
  return (
    <h1>FeatureFlags</h1>
  )
}

export default FeatureFlags