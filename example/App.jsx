import React from "react";
import SlicingSlider from "../src/SlicingSlider";


import slide1 from "../public/image1.webp";
import slide2 from "../public/image2.jpg";
import slide3 from "../public/image3.jpeg";

const images = [slide1, slide2, slide3];

function App() {
  return (
    <div>
      <h1>Click Slider to Next Slide</h1>
      <SlicingSlider class="{width : 100%}" images={images} slices={5} duration={300} delay={50} />
    </div>
  );
}

export default App;
