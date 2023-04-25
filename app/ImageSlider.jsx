"use client";

import { useState } from "react";

export function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
    </div>
  );
}
