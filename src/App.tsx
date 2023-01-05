import { useState } from "react";
import "./App.css";
import useDeviceWidth from "./hooks/useDeviceWidth";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const deviceWidth = useDeviceWidth()

  return (
    <div className="App">
      <h1>Device screen width: {deviceWidth}</h1>

      Credits: <a target={'_blank'} href="https://linktr.ee/sahilrajput03">Sahil Rajput</a>
    </div>
  );
}

export default App;
