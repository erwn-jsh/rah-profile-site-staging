import styled from "styled-components";

export const Gallery = styled.section`
  width: 100%;
  overflow: hidden;

  p {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  img:first-of-type {
    height: 100vh;
    padding: 0 230px;
  }

  img:nth-of-type(2) {
    width: 100vw;
    object-fit: cover;
    padding: 40px 250px;
  }

  img:nth-of-type(3) {
    width: 100vw;
    object-fit: cover;
    padding: 40px 300px;
  }

  img:nth-of-type(4) {
    width: 100vw;
    object-fit: cover;
    padding: 20px 220px;
  }

  img:nth-of-type(5) {
    width: 100vw;
    object-fit: cover;
    padding: 20px 220px;
  }

  img:nth-of-type(10) {
    width: 100vw;
    object-fit: cover;
    padding: 20px 300px;
  }

  img {
    width: 100vw;
    object-fit: cover;
    padding: 20px 220px;
  }
`;
