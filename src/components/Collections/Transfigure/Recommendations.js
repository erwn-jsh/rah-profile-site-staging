import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import KNJ from "../../../assets/images/KNJ/Cover.png";
import Pulse from "../../../assets/images/Pulse/4.jpg";

const RecommendationsSection = styled.section`
  display: flex;
  flex-direction: column;
  background: #000000;
  padding-top: 200px;
  padding-right: 100px;
  padding-left: 100px;

  h2 {
    color: #ffffff !important;
    font-size: 1.2rem;
    font-weight: 100;
    text-transform: uppercase;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 1.5rem;
    line-height: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding-right: 80px;
    padding-left: 80px;

    h2 {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  @media only screen and (max-width: 520px) {
    padding-right: 40px;
    padding-left: 40px;

    h2 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: 1rem;
      letter-spacing: 0.5rem;
      line-height: 1.2rem;
    }
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
  }
`;

const RecsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  overflow: hidden;
`;

const Recommendation = styled.div`
  cursor: pointer;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-size: 3.5rem;
  width: 50%;
  letter-spacing: 0.7rem;
  transition: all 0.5s;
  padding: 5px;
  border-radius: 5px;
  position: relative;

  a {
    color: #ffffff !important;
    text-decoration: none;
  }

  img {
    margin: auto;
    margin-bottom: 16px;
    object-fit: cover;
    max-height: 550px;
    width: 100%;
  }

  h3 {
    display: inline;
  }

  div {
    position: absolute;
    opacity: 0;
    transition: opacity 0.15s ease;
    width: 100%;
    height: 100%;
    padding-top: 40%;
    padding-bottom: 60%;
  }

  &:hover {
    div {
      opacity: 1;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);

      h4 {
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    h4 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;

    h4 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 520px) {
    h4 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 400px) {
    h4 {
      font-size: 1rem;
    }
  }
`;

const Recommendations = () => {
  return (
    <>
      <RecommendationsSection>
        <h2>You may also like:</h2>
        <RecsWrapper>
          <Recommendation>
            <Link to="/Collections/knj1">
              <img src={KNJ} />

              <div>
                <h4>KNJ&nbsp;</h4>
              </div>
            </Link>
          </Recommendation>
          <Recommendation>
            <Link to="/Collections/pulse">
              <img src={Pulse} />
              <div>
                <h4>Pulse</h4>
              </div>
            </Link>
          </Recommendation>
        </RecsWrapper>
      </RecommendationsSection>
    </>
  );
};

export default Recommendations;
