import styled from "styled-components";

export const Gallery = styled.section`
  background: #f5e4e7;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

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
`;

export const Footer = styled.section`
  height: 100vh;
`;
