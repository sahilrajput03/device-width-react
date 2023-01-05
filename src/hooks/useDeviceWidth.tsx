import { useCallback, useEffect, useState } from "react";

const useDeviceWidth = () => {
	const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
	const resizeCallback = useCallback(() => {
	  setDeviceWidth(window.innerWidth);
	}, []);
  
	useEffect(() => {
	  window.addEventListener('resize', resizeCallback);
  
	  return () => window.removeEventListener('resize', resizeCallback);
	}, []);
  
	return deviceWidth;
  };
  
  export default useDeviceWidth;
  