import React, {  useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const VantaBackground = ({children}) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {children}
    </div>
  );
};

export default VantaBackground;
