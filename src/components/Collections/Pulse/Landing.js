import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import MenuManager from "../../ProjectMenuAlt/MenuManager";
import Menu from "../../ProjectMenuAlt";
import ExploreButton from "../../ProjectMenuAlt/ExploreButton/ExploreButton";
import LandingImage from "../../../assets/images/Pulse/4.jpg";

const LandingSection = styled.section`
  height: 200vh;
  background: #f5e4e7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 100vh;
    object-fit: cover;
    margin-left: 165px;
    margin-right: 165px;
  }

  h1 {
    font-family: "Arial", sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-family: "Arial", sans-serif;
    font-size: 1.1rem;
    line-height: 1.8rem;
    text-align: justify;
    margin-right: 320px;
    margin-left: 320px;
    margin-bottom: 60px;

    span {
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 1100px) {
    img {
      height: 100vh;
      object-fit: cover;
      margin-left: 100px;
      margin-right: 100px;
    }

    p {
      margin-right: 220px;
      margin-left: 220px;
    }
  }
  @media only screen and (max-width: 1000px) {
    img {
      height: 100vh;
      object-fit: cover;
      margin-left: 50px;
      margin-right: 50px;
    }

    p {
      margin-right: 120px;
      margin-left: 120px;
    }
  }
  @media only screen and (max-width: 900px) {
    img {
      height: 100vh;
      object-fit: cover;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 100vw;
      object-fit: contain;
      margin-left: 0;
      margin-right: 0;
    }

    p {
      margin-right: 80px;
      margin-left: 80px;
    }
  }
  @media only screen and (max-width: 500px) {
    p {
      margin-top: 100px;
      margin-right: 40px;
      margin-left: 40px;
    }
  }
`;

const Landing = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  let variants = (delayDuration) => {
    let variant = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delayDuration,
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      },
      hidden: {
        opacity: 0,
        y: 72,
      },
    };
    return variant;
  };

  return (
    <>
      <MenuManager>
        <Menu />
        <LandingSection>
          <img src={LandingImage} />
          <motion.h1
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(0.4)}
          >
            Robert Andrew Hiyas
          </motion.h1>
          <motion.p
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={variants(0.8)}
          >
            <span>PULSE: A LIFE STORY</span> is a fashion brand that celebrates
            life and diversity by creating nonconventional and
            gender-nonconformist clothing. PULSE aims to produce fashion apparel
            that combines comforting familiarity and surprising novelty. As
            such, this particular collection showcases garments that are
            inspired by the theme of plurality yet counterbalanced by the
            principle of harmony. The 12-piece wear anchors its design concept
            to the life stories and experiences of individuals, across cultures
            and across boundaries, who are persecuted or discriminated for their
            gender identity and sexual orientation. The materials and elements
            of this collection intend to communicate the message of tolerance
            and acceptance to both wearers and spectators. PULSE hopes to create
            and promote timeless fashion inspired by human diversity and
            tailored in fine quality.
          </motion.p>
          <ExploreButton />
        </LandingSection>
      </MenuManager>
    </>
  );
};

export default Landing;
