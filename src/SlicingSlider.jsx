import React, { useState } from "react";
import "../theme/slicing_slider.css";

export default function SlicingSlider({
  images = [],
  slices = 5,
  duration = 800,
  delay = 100,
}) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((current + 1) % images.length);
      setAnimating(false);
    }, duration + slices * delay);
  };

  const sliceWidth = 100 / slices;

  return (
    <div className="slicing-slider" onClick={nextSlide}>
      <div className="slides-wrapper">
        {Array.from({ length: slices }).map((_, i) => (
          <div
            key={`current-${i}`}
            className={`slice current ${animating ? "animate-out" : ""}`}
            style={{
              left: `${i * sliceWidth}%`,
              width: `${sliceWidth}%`,
              transitionDelay: `${i * delay}ms`,
              transitionDuration: `${duration}ms`,
              overflow: "hidden",
            }}
          >
            <img
              src={images[current]}
              style={{
                width: `${slices * 100}%`,
                transform: `translateX(-${i * sliceWidth}%)`,
              }}
              alt=""
            />
          </div>
        ))}

        {animating &&
          Array.from({ length: slices }).map((_, i) => (
            <div
              key={`next-${i}`}
              className={`slice next animate-in`}
              style={{
                left: `${i * sliceWidth}%`,
                width: `${sliceWidth}%`,
                transitionDelay: `${i * delay}ms`,
                transitionDuration: `${duration}ms`,
                overflow: "hidden",
              }}
            >
              <img
                src={images[(current + 1) % images.length]}
                style={{
                  width: `${slices * 100}%`,
                  transform: `translateX(-${i * sliceWidth}%)`,
                }}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}
