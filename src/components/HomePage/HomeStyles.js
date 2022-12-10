import styled from "styled-components";
import { motion } from "framer-motion";

export const HomePageWrapper = styled.div`
  height: 100vh;
  background: #000000;
  padding-top: 20px;
`;

export const FirstNameContainer = styled(motion.div)`
  position: absolute;
  bottom: 75px;
  left: 100px;
  h1 {
    color: #ffffff !important;
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 10vh;
    max-width: 70vw;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    color: #111;
    letter-spacing: 1.5rem;
    line-height: 5rem;
  }

  @media only screen and (max-width: 1220px) {
    h1 {
      margin-bottom: 5vh;
      font-size: 3rem;
      letter-spacing: 1.5rem;
      line-height: 5rem;
      max-width: 100vw;
    }
  }

  @media only screen and (max-width: 850px) {
    h1 {
      margin-bottom: 10vh;
      font-size: 3rem;
      letter-spacing: 1.5rem;
      line-height: 5rem;
      max-width: 100vw;
    }
  }

  @media only screen and (max-width: 768px) {
    bottom: 75px;
    left: 20px;
    h1 {
      font-size: 2rem;
      letter-spacing: 1.5rem;
      line-height: 2rem;
      max-width: 100vw;
    }
  }

  @media only screen and (max-width: 645px) {
    bottom: 0;
    left: 20px;
    h1 {
      font-size: 1.2rem;
      letter-spacing: 1.5rem;
      max-width: 100vw;
      line-height: 4rem;
    }
  }

  @media only screen and (max-width: 625px) {
    bottom: 25%;
    left: 18%;
    h1 {
      font-size: 1.2rem;
      letter-spacing: 1.5rem;
      max-width: 100vw;
      line-height: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    bottom: 25%;
    left: 18%;
    h1 {
      font-size: 1.2rem;
      letter-spacing: 1rem;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      max-width: 70vw;
      line-height: 0;
    }
  }

  @media only screen and (max-width: 450px) {
    bottom: 25%;
    /* left: 18%; */
    h1 {
      font-size: 1.2rem;
      letter-spacing: 0.75rem;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      width: 100vw;
      line-height: 0;
    }
  }

  @media only screen and (max-width: 420px) {
    bottom: 25%;
    /* left: 18%; */
    h1 {
      font-size: 1rem;
      letter-spacing: 0.75rem;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }

  @media only screen and (max-width: 400px) {
    margin-left: auto;
    margin-right: auto;
    left: 40%;
    right: 0;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.75rem;
    }
  }

  @media only screen and (max-width: 400px) {
    left: 0%;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.3rem;
    }
  }

  @media only screen and (max-width: 400px) {
    left: 0%;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.3rem;
    }
  }

  @media only screen and (max-width: 395px) {
    left: 13.5%;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.3rem;
    }
  }

  @media only screen and (max-width: 375px) {
    left: 11.5%;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.3rem;
    }
  }
`;

export const SecondNameContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 100px;
  h1 {
    color: #ffffff !important;
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 10vh;
    max-width: 70vw;
    padding-left: 72px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;

    letter-spacing: 1.5rem;
    line-height: 5rem;
  }

  @media only screen and (max-width: 1220px) {
    h1 {
      font-size: 3rem;
      letter-spacing: 1.5rem;
      line-height: 2rem;
      max-width: 100vw;
    }
  }

  @media only screen and (max-width: 850px) {
    h1 {
      font-size: 3rem;
      letter-spacing: 1.5rem;
      line-height: 2.8rem;
      max-width: 100vw;
    }
  }

  @media only screen and (max-width: 768px) {
    bottom: 0;
    left: 20px;
    h1 {
      font-size: 2rem;
      letter-spacing: 1.5rem;
      max-width: 100vw;
      line-height: 5rem;
    }
  }

  @media only screen and (max-width: 645px) {
    bottom: 0;
    left: 20px;
    h1 {
      font-size: 1.2rem;
      letter-spacing: 1.5rem;
      max-width: 100vw;
      line-height: 0;
    }
  }

  @media only screen and (max-width: 625px) {
    /* bottom: 18%;
    left: 1%; */
    /* width: 100%; */
    h1 {
      font-size: 1.2rem;
      letter-spacing: 1.5rem;
      line-height: 0;
    }
  }
  @media only screen and (max-width: 600px) {
    top: 70%;
    h1 {
      font-size: 1rem;
      letter-spacing: 1rem;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      line-height: 0;
      max-width: 80vw;
    }
  }

  @media only screen and (max-width: 500px) {
    bottom: 18%;
    /* left: 0;
    width: 100vw; */
    h1 {
      font-size: 1rem;
      letter-spacing: 0.75rem;
      line-height: 0;
    }
  }

  @media only screen and (max-width: 450px) {
    bottom: 18%;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.5rem;
      line-height: 0;
    }
  }

  @media only screen and (max-width: 400px) {
    margin-left: auto;
    margin-right: auto;
    left: 0%;
    right: 0;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.5rem;
    }
  }

  @media only screen and (max-width: 395px) {
    h1 {
      font-size: 1rem;
      letter-spacing: 0.3rem;
    }
  }

  @media only screen and (max-width: 375px) {
    margin-left: 0;
    margin-right: 0;
    left: 8%;
    right: 0;
    h1 {
      font-size: 1rem;
      letter-spacing: 0.2rem;
      max-width: 100vw;
    }
  }
`;

export const Header = styled(motion.div)`
  position: absolute;
  width: 90%;
  margin-top: 10vh;
  height: 75vh;
  margin-right: 96px;
  margin-left: 75px;

  p {
    color: #808080 !important;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 100;
    line-height: 2rem;
    letter-spacing: 0.2rem;
    text-align: right;
    padding-top: 0.8vh;
  }

  @media only screen and (max-width: 990px) {
    p {
      font-size: 1.2rem;
      line-height: 2rem;
      letter-spacing: 0.2rem;
    }
  }

  @media only screen and (max-width: 890px) {
    p {
      font-size: 1rem;
      line-height: 1rem;
      letter-spacing: 0.2rem;
    }
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
