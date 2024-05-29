import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { name: "Living Room", isOn: false, id: 1 },
    { name: "Kitchen", isOn: false, id: 2 },
    { name: "Bedroom", isOn: false, id: 3 },
    { name: "Bathroom", isOn: false, id: 4 },
    { name: "Garage", isOn: false, id: 5 },
    { name: "Porch", isOn: false, id: 6 },
    { name: "Garden", isOn: false, id: 7 },
    { name: "Office", isOn: false, id: 8 },
  ];

  const [lights, setLights] = useState(initialLights);

  // console.log(lights);

  function handleToggle(id) {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function AllLightsOn() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: true })));
  }

  function AllLightsOff() {
    setLights((lights) => lights.map((light) => ({ ...light, isOn: false })));
  }

  let count = lights.filter(({ isOn }) => isOn).length;

  let isDimmed = count === 0 ? true : false;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        count={count}
        AllLightsOn={AllLightsOn}
        AllLightsOff={AllLightsOff}
      />
    </Layout>
  );
}
