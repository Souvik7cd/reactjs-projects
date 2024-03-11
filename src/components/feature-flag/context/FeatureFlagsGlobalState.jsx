import { createContext, useEffect, useState } from 'react'
import featureFlagDataServiceCall from '../dummyApiResponse';

export const FeatureFlagsContext = createContext(null);

const FeatureFlagsGlobalState = ({children}) => {

  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({})

  const fetchFeatureFlags = async() => {
    try {
      setLoading(true);
      const response = await featureFlagDataServiceCall();
      console.log(response);
    } catch(error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  },[]);

  return (
    <FeatureFlagsContext.Provider value={{}}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

export default FeatureFlagsGlobalState