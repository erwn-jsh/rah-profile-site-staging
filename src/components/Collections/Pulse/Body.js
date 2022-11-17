import React from "react";

// Importing Styles
import { Gallery } from "./BodyStyles";

import P1 from "../../../assets/images/Pulse/Pulse1.png";
import P2 from "../../../assets/images/Pulse/Pulse2.png";
import P3 from "../../../assets/images/Pulse/Pulse3.png";
import P4 from "../../../assets/images/Pulse/Pulse4.png";
import P5 from "../../../assets/images/Pulse/Pulse5.png";
import P6 from "../../../assets/images/Pulse/Pulse6.png";
import P7 from "../../../assets/images/Pulse/Pulse7.png";
import P8 from "../../../assets/images/Pulse/Pulse8.png";
import P9 from "../../../assets/images/Pulse/Pulse9.png";
import P10 from "../../../assets/images/Pulse/Pulse10.png";

const Body = () => {
  return (
    <>
      <Gallery>
        <div>
          <p>Pulse</p>
        </div>
        <div>
          <p>A Life Story</p>
        </div>

        <img src={P1} />
        <img src={P2} />
        <img src={P3} />
        <img src={P4} />
        <img src={P5} />
        <img src={P6} />
        <img src={P7} />
        <img src={P8} />
        <img src={P9} />
        <img src={P10} />
      </Gallery>
    </>
  );
};

export default Body;
