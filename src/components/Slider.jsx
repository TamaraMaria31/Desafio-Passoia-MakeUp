import React, { useState } from "react";
import "/src/Styles.CSS";

export default function Slider({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="slider">
      <div className="main-slide" onClick={() => setActive((active + 1) % images.length)}>
        <div className="img-wrapper">
          <img className="main-img" src={images[active].src} alt={images[active].label} />

          {/* Texto sobreposto */}
          <div className="img-label">{images[active].label}</div>
        </div>
      </div>
    </div>
  );
}
