import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
  background: #000000;
  overflow: hidden;
  padding-top: 140px;
  padding-left: 140px;
  padding-right: 140px;
  padding-bottom: 112px;

  p {
    margin-top: 40px;
    text-align: center;
    color: #343838;
    font-weight: 400;
    font-family: "Josefin Sans", sans-serif;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media only screen and (max-width: 520px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media only screen and (max-width: 400px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ContactIconsWrapper = styled(motion.div)`
  margin-top: 50px;
  margin-right: 33%;
  margin-left: 33%;
  display: flex;
  justify-content: center;

  a {
    color: white;

    svg {
      margin-right: 48px;
      width: 24px;
      height: 24px;
      stroke-width: 1.5px;
    }
  }
`;
