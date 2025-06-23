import React from "react";
import "../theme/slider.css";

export default function MySlider({
  min = 0,
  max = 100,
  value,
  onChange
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
}