import React from "react";
import styled, { keyframes } from "styled-components";

const AnimatedMouse = keyframes`
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
     opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
`;

const AnimatedMouseScroll = keyframes`
0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const MouseScroll = styled.div`
  margin: 0 auto 20px auto;
  left: 50%;
  top: 80px;
  -webkit-transform: translateX(-50%);

  div {
    span {
      display: block;
      width: 12px;
      height: 12px;
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      transform: rotate(45deg);
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      margin: 0 0 3px 2px;
    }
  }
`;

const Mouse = styled.div`
  height: 21px;
  width: 14px;
  border-radius: 10px;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  border: 2px solid #ffffff;
  top: 170px;
  margin-bottom: 12px;
`;

const MouseIn = styled.div`
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: #ffffff;
  position: relative;

  animation-name: ${AnimatedMouse};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;

const DownArrow1 = styled.span`
  margin-top: 24px;
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -webkit-animation-direction: alternate;

  animation-name: ${AnimatedMouseScroll};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;

const DownArrow2 = styled.span`
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-direction: alternate;

  animation-name: ${AnimatedMouseScroll};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;
const DownArrow3 = styled.span`
  -webkit-animation-delay: 0.3s;
  -moz-animation-dekay: 0.3s;
  -webkit-animation-direction: alternate;

  animation-name: ${AnimatedMouseScroll};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;

const Container = styled.div`
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 8rem;
  width: 100%;
  font-family: "Josefin Sans", serif;
  font-weight: 100;

  h4 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
    font-size: 2rem;
    margin-bottom: -2px;
  }
`;

const DownWhiteArrow = () => {
  return (
    <>
      {/* <iframe
        height="96"
        src="https://embed.lottiefiles.com/animation/62604"
      ></iframe> */}

      {/* <MouseScroll>
        <Mouse>
          <MouseIn></MouseIn>
        </Mouse>
        <div>
          <DownArrow1></DownArrow1>
          <DownArrow2></DownArrow2>
          <DownArrow3></DownArrow3>
        </div>
      </MouseScroll> */}

      <Container>
        <h4>scroll</h4>
        <p>|</p>
        <p>|</p>
      </Container>
    </>
  );
};

export default DownWhiteArrow;
