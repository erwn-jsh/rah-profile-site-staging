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

  @media only screen and (max-width: 1300px) {
    img:first-of-type {
      height: 100vh;
      padding: 0 100px;
    }

    img:nth-of-type(2) {
      width: 100vw;
      object-fit: cover;
      padding: 40px 108px;
    }

    img:nth-of-type(3) {
      width: 100vw;
      object-fit: cover;
      padding: 40px 130px;
    }

    img:nth-of-type(4) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 95px;
    }

    img:nth-of-type(5) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 95px;
    }

    img:nth-of-type(10) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 133px;
    }

    img {
      width: 100vw;
      object-fit: cover;
      padding: 20px 200px;
    }
  }

  @media only screen and (max-width: 1100px) {
    img:first-of-type {
      height: 100vh;
      padding: 0 0;
    }

    img:nth-of-type(2) {
      width: 100vw;
      object-fit: cover;
      padding: 40px 70px;
    }

    img:nth-of-type(3) {
      width: 100vw;
      object-fit: cover;
      padding: 40px 100px;
    }

    img:nth-of-type(4) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 70px;
    }

    img:nth-of-type(5) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 95px;
    }

    img:nth-of-type(10) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 133px;
    }

    img {
      width: 100vw;
      object-fit: cover;
      padding: 20px 120px;
    }
  }

  @media only screen and (max-width: 1000px) {
    img:first-of-type {
      width: 100vw;
      object-fit: contain;
      padding: 0 0;
    }

    img:nth-of-type(2) {
      width: 100vw;
      object-fit: cover;
      padding: 0 30px;
    }

    img:nth-of-type(3) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 50px;
    }

    img:nth-of-type(4) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 35px;
    }

    img:nth-of-type(5) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 35px;
    }

    img:nth-of-type(10) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 50px;
    }

    img {
      width: 100vw;
      object-fit: cover;
      padding: 20px 70px;
    }
  }

  @media only screen and (max-width: 500px) {
    img:first-of-type {
      width: 100vw;
      object-fit: contain;
      padding: 0 0;
    }

    img:nth-of-type(2) {
      width: 100vw;
      object-fit: cover;
      padding: 0 30px;
    }

    img:nth-of-type(3) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 50px;
    }

    img:nth-of-type(4) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 35px;
    }

    img:nth-of-type(5) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 35px;
    }

    img:nth-of-type(10) {
      width: 100vw;
      object-fit: cover;
      padding: 20px 50px;
    }

    img {
      width: 100vw;
      object-fit: cover;
      padding: 20px 70px;
    }
  }
`;


