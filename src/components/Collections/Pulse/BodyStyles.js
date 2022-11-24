import styled from "styled-components";

export const Gallery = styled.section`
  background: #f5e4e7;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  transition: all 0.5s;

  p {
    font-family: "Arial", sans-serif;
    font-size: 1.4rem;

    text-transform: uppercase;
    letter-spacing: 0.5rem;
    opacity: 0.8;
  }

  div:first-of-type {
    height: 1020vh;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;

    p {
      position: sticky;
      top: 40%;
      bottom: 40%;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      transform: rotate(180deg);
      margin-left: 40px;
    }
  }

  div:nth-of-type(2) {
    height: 1025vh;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;

    p {
      position: sticky;
      top: 33%;
      bottom: 33%;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      margin-right: 40px;
    }
  }

  img {
    width: 100vw;
    object-fit: cover;
    padding-left: 165px;
    padding-right: 165px;
  }

  @media only screen and (max-width: 1300px) {
    div:first-of-type {
      height: 810vh;
    }
    div:nth-of-type(2) {
      height: 815vh;
    }
  }
  @media only screen and (max-width: 1100px) {
    div:first-of-type {
      height: 750vh;
    }
    div:nth-of-type(2) {
      height: 755vh;
    }
    img {
      width: 100vw;
      object-fit: cover;
      padding-left: 100px;
      padding-right: 100px;
    }
  }
  @media only screen and (max-width: 1000px) {
    div:first-of-type {
      height: 670vh;
    }
    div:nth-of-type(2) {
      height: 675vh;
    }
  }

  @media only screen and (max-width: 900px) {
    div:first-of-type {
      height: 590vh;
    }
    div:nth-of-type(2) {
      height: 595vh;
    }
  }

  @media only screen and (max-width: 800px) {
    div:first-of-type {
      height: 390vh;
    }
    div:nth-of-type(2) {
      height: 395vh;
    }
  }

  @media only screen and (max-width: 768px) {
    div:first-of-type {
      display: none;
    }
    div:nth-of-type(2) {
      display: none;
    }

    img {
      width: 100vw;
      object-fit: cover;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Footer = styled.section`
  height: 100vh;
`;
