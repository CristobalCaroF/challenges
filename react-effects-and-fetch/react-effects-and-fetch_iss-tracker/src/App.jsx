import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  try {
    useEffect(() => {
      async function getISSCoords() {
        const response = await fetch(URL);
        const fetchedCoords = await response.json();
        setCoords({
          longitude: fetchedCoords.longitude,
          latitude: fetchedCoords.latitude,
        });
      }
      const interval = setInterval(getISSCoords, 5000);
      return clearInterval(interval.id);
    }, []);
  } catch (error) {
    console.error(error);
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
