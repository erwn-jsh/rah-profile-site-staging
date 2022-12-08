import React from "react";
import styled from "styled-components";

import MenuManager from "../../ProjectMenu/MenuManager";
import Menu from "../../ProjectMenu";
import ExploreButton from "../../ProjectMenu/ExploreButton/ExploreButton";

// import Cover from "../../../assets/images/Bunteduffem/Cover.png";
// import P1 from "../../../assets/images/Bunteduffem/Page 1.png";
// import P2 from "../../../assets/images/Bunteduffem/Page 2.png";
// import P3 from "../../../assets/images/Bunteduffem/Page 3.png";
// import P4 from "../../../assets/images/Bunteduffem/Page 4.png";
// import P5 from "../../../assets/images/Bunteduffem/Page 5.png";
// import P6 from "../../../assets/images/Bunteduffem/Page 6.png";
// import P7 from "../../../assets/images/Bunteduffem/Page 7.png";
// import P8 from "../../../assets/images/Bunteduffem/Page 8.png";
// import P9 from "../../../assets/images/Bunteduffem/Page 9.png";
// import P10 from "../../../assets/images/Bunteduffem/Page 10.png";
// import P11 from "../../../assets/images/Bunteduffem/Page 11.png";
// import P12 from "../../../assets/images/Bunteduffem/Page 12.png";
// import P13 from "../../../assets/images/Bunteduffem/Page 13.png";
// import P14 from "../../../assets/images/Bunteduffem/Page 14.png";
// import P15 from "../../../assets/images/Bunteduffem/Page 15.png";
// import P16 from "../../../assets/images/Bunteduffem/Page 16.png";
// import P17 from "../../../assets/images/Bunteduffem/Page 17.png";

import CoverA from "../../../assets/images/Bunteduffem/Halved/CoverA.png";
import CoverB from "../../../assets/images/Bunteduffem/Halved/CoverB.png";
import P1A from "../../../assets/images/Bunteduffem/Halved/Page 1A.png";
import P1B from "../../../assets/images/Bunteduffem/Halved/Page 1B.png";
import P2A from "../../../assets/images/Bunteduffem/Halved/Page 2A.png";
import P2B from "../../../assets/images/Bunteduffem/Halved/Page 2B.png";
import P3A from "../../../assets/images/Bunteduffem/Halved/Page 3A.png";
import P3B from "../../../assets/images/Bunteduffem/Halved/Page 3B.png";
import P4A from "../../../assets/images/Bunteduffem/Halved/Page 4A.png";
import P4B from "../../../assets/images/Bunteduffem/Halved/Page 4B.png";
import P5A from "../../../assets/images/Bunteduffem/Halved/Page 5A.png";
import P5B from "../../../assets/images/Bunteduffem/Halved/Page 5B.png";
import P6A from "../../../assets/images/Bunteduffem/Halved/Page 6A.png";
import P6B from "../../../assets/images/Bunteduffem/Halved/Page 6B.png";
import P7A from "../../../assets/images/Bunteduffem/Halved/Page 7A.png";
import P7B from "../../../assets/images/Bunteduffem/Halved/Page 7B.png";
import P8A from "../../../assets/images/Bunteduffem/Halved/Page 8A.png";
import P8B from "../../../assets/images/Bunteduffem/Halved/Page 8B.png";
import P9A from "../../../assets/images/Bunteduffem/Halved/Page 9A.png";
import P9B from "../../../assets/images/Bunteduffem/Halved/Page 9B.png";
import P10A from "../../../assets/images/Bunteduffem/Halved/Page 10A.png";
import P10B from "../../../assets/images/Bunteduffem/Halved/Page 10B.png";
import P11A from "../../../assets/images/Bunteduffem/Halved/Page 11A.png";
import P11B from "../../../assets/images/Bunteduffem/Halved/Page 11B.png";
import P12A from "../../../assets/images/Bunteduffem/Halved/Page 12A.png";
import P12B from "../../../assets/images/Bunteduffem/Halved/Page 12B.png";
import P13A from "../../../assets/images/Bunteduffem/Halved/Page 13A.png";
import P13B from "../../../assets/images/Bunteduffem/Halved/Page 13B.png";
import P14A from "../../../assets/images/Bunteduffem/Halved/Page 14A.png";
import P14B from "../../../assets/images/Bunteduffem/Halved/Page 14B.png";
import P15A from "../../../assets/images/Bunteduffem/Halved/Page 15A.png";
import P15B from "../../../assets/images/Bunteduffem/Halved/Page 15B.png";
import P16A from "../../../assets/images/Bunteduffem/Halved/Page 16A.png";
import P16B from "../../../assets/images/Bunteduffem/Halved/Page 16B.png";
import P17A from "../../../assets/images/Bunteduffem/Halved/Page 17A.png";
import P17B from "../../../assets/images/Bunteduffem/Halved/Page 17B.png";

export const Gallery = styled.section`
  width: 100%;
  background: #000;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
  padding-right: 200px;
  padding-left: 200px;

  transition: all 0.5s;

  /* img {
    height: 100vh;
    object-fit: fit;
  } */

  img {
    width: 36vw;
    object-fit: contain;
  }

  @media only screen and (max-width: 1300px) {
    /* padding-right: 200px;
    padding-left: 100px; */

    /* img {
      width: 100vw;
      object-fit: contain;
    } */

    padding-right: 100px;
    padding-left: 100px;

    img {
      width: 36vw;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 1100px) {
    /* padding-right: 0;
    padding-left: 0;
    img {
      width: 100vw;
      object-fit: contain;
    } */

    padding-right: auto;
    padding-left: auto;
    img {
      width: 36vw;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 1000px) {
    /* padding-right: 10px;
    padding-left: 10px;
    img {
      width: 100vw;
      object-fit: contain;
    } */

    /* padding-right: auto;
    padding-left: auto; */
    padding: 0 auto;
    img {
      width: 36vw;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 768px) {
    /* padding-right: 10px;
    padding-left: 10px;
    img {
      width: 100vw;
      object-fit: cover;
    } */

    /* margin: 0; */
    padding: 0 0;
    img {
      height: 100vh;
      width: 100vw;
      object-fit: contain;
    }
  }
`;

const Body = () => {
  return (
    <>
      <MenuManager>
        <Menu />
        <Gallery>
          {/* <img src={Cover} />
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
          <img src={P17} /> */}
          <img src={CoverA} />
          <img src={CoverB} />
          <img src={P1A} />
          <img src={P1B} />
          <img src={P2A} />
          <img src={P2B} />
          <img src={P3A} />
          <img src={P3B} />
          <img src={P4A} />
          <img src={P4B} />
          <img src={P5A} />
          <img src={P5B} />
          <img src={P6A} />
          <img src={P6B} />
          <img src={P7A} />
          <img src={P7B} />
          <img src={P8A} />
          <img src={P8B} />
          <img src={P9A} />
          <img src={P9B} />
          <img src={P10A} />
          <img src={P10B} />
          <img src={P11A} />
          <img src={P11B} />
          <img src={P12A} />
          <img src={P12B} />
          <img src={P13A} />
          <img src={P13B} />
          <img src={P14A} />
          <img src={P14B} />
          <img src={P15A} />
          <img src={P15B} />
          <img src={P16A} />
          <img src={P16B} />
          <img src={P17A} />
          <img src={P17B} />
        </Gallery>

        <ExploreButton invert={true} />
      </MenuManager>
    </>
  );
};

export default Body;
