import React from "react";

import MenuManager from "../../ProjectMenuAlt/MenuManager";
import Menu from "../../ProjectMenuAlt";
import ExploreButton from "../../ProjectMenuAlt/ExploreButton/ExploreButton";

import { Gallery } from "./BodyStyles";

import Cover from "../../../assets/images/KNJ/Cover.png";
import P1 from "../../../assets/images/KNJ/1.png";
import P2 from "../../../assets/images/KNJ/2.png";
import P3 from "../../../assets/images/KNJ/3.png";
import P4 from "../../../assets/images/KNJ/4.png";
import P5 from "../../../assets/images/KNJ/5.png";
import P6 from "../../../assets/images/KNJ/6.png";
import P7 from "../../../assets/images/KNJ/7.png";
import P8 from "../../../assets/images/KNJ/8.png";
import P9 from "../../../assets/images/KNJ/9.png";
import P10 from "../../../assets/images/KNJ/10.png";
import P11 from "../../../assets/images/KNJ/11.png";
import P12 from "../../../assets/images/KNJ/12.png";
import P13 from "../../../assets/images/KNJ/13.png";

const Body = () => {
  return (
    <div>
      <MenuManager>
        <Menu />
        <Gallery>
          <img src={Cover} />
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
          <img src={P11} />
          <img src={P12} />
          <img src={P13} />
        </Gallery>
        <ExploreButton />
      </MenuManager>
    </div>
  );
};

export default Body;
