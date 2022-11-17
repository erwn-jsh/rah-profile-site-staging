import React from "react";
import styled from "styled-components";

import MenuManager from "../../ProjectMenu/MenuManager";
import Menu from "../../ProjectMenu";
import ExploreButton from "../../ProjectMenu/ExploreButton/ExploreButton";

import Cover from "../../../assets/images/Bunteduffem/Cover.png";
import P1 from "../../../assets/images/Bunteduffem/Page 1.png";
import P2 from "../../../assets/images/Bunteduffem/Page 2.png";
import P3 from "../../../assets/images/Bunteduffem/Page 3.png";
import P4 from "../../../assets/images/Bunteduffem/Page 4.png";
import P5 from "../../../assets/images/Bunteduffem/Page 5.png";
import P6 from "../../../assets/images/Bunteduffem/Page 6.png";
import P7 from "../../../assets/images/Bunteduffem/Page 7.png";
import P8 from "../../../assets/images/Bunteduffem/Page 8.png";
import P9 from "../../../assets/images/Bunteduffem/Page 9.png";
import P10 from "../../../assets/images/Bunteduffem/Page 10.png";
import P11 from "../../../assets/images/Bunteduffem/Page 11.png";
import P12 from "../../../assets/images/Bunteduffem/Page 12.png";
import P13 from "../../../assets/images/Bunteduffem/Page 13.png";
import P14 from "../../../assets/images/Bunteduffem/Page 14.png";
import P15 from "../../../assets/images/Bunteduffem/Page 15.png";
import P16 from "../../../assets/images/Bunteduffem/Page 16.png";
import P17 from "../../../assets/images/Bunteduffem/Page 17.png";

export const Gallery = styled.section`
  width: 100%;
  background: #000;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  padding-right: 200px;
  padding-left: 200px;

  img {
    height: 100vh;
    object-fit: fit;
  }
`;

const Body = () => {
  return (
    <>
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
          <img src={P14} />
          <img src={P15} />
          <img src={P16} />
          <img src={P17} />
        </Gallery>
        <ExploreButton invert={true} />
      </MenuManager>
    </>
  );
};

export default Body;
