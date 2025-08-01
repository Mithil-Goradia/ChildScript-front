import React from 'react';
import styled from 'styled-components';

const But = () => {
  return (
    <StyledWrapper>
      <button className="uiverse">
        <div className="wrapper">
          <span>Run Code</span>
          <div className="circle circle-12" />
          <div className="circle circle-11" />
          <div className="circle circle-10" />
          <div className="circle circle-9" />
          <div className="circle circle-8" />
          <div className="circle circle-7" />
          <div className="circle circle-6" />
          <div className="circle circle-5" />
          <div className="circle circle-4" />
          <div className="circle circle-3" />
          <div className="circle circle-2" />
          <div className="circle circle-1" />
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .uiverse {
    --duration: 7s;
    --easing: linear;
    --c-color-1: rgba(255, 163, 26, 0.7);
    --c-color-2: #1a23ff;
    --c-color-3: #e21bda;
    --c-color-4: rgba(255, 232, 26, 0.7);
    --c-shadow: rgba(255, 223, 87, 0.5);
    --c-shadow-inset-top: rgba(255, 223, 52, 0.9);
    --c-shadow-inset-bottom: rgba(255, 250, 215, 0.8);
    --c-radial-inner: #ffd215;
    --c-radial-outer: #fff172;
    --c-color: #fff;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    outline: none;
    position: relative;
    cursor: pointer;
    border: none;
    display: table;
    border-radius: 24px;
    padding: 0;
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    line-height: 1.5;
    color: var(--c-color);
    background: radial-gradient(
      circle,
      var(--c-radial-inner),
      var(--c-radial-outer) 80%
    );
    box-shadow: 0 0 14px var(--c-shadow);
  }

  .uiverse:before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    box-shadow:
      inset 0 3px 12px var(--c-shadow-inset-top),
      inset 0 -3px 4px var(--c-shadow-inset-bottom);
  }

  .uiverse .wrapper {
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    overflow: hidden;
    border-radius: 24px;
    min-width: 132px;
    padding: 12px 0;
  }

  .uiverse .wrapper span {
    display: inline-block;
    position: relative;
    z-index: 1;
  }

  .uiverse:hover {
    --duration: 1400ms;
  }

  .uiverse .wrapper .circle {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: blur(var(--blur, 8px));
    background: var(--background, transparent);
    transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
    animation: var(--animation, none) var(--duration) var(--easing) infinite;
  }

  .uiverse .wrapper .circle.circle-1,
  .uiverse .wrapper .circle.circle-9,
  .uiverse .wrapper .circle.circle-10 {
    --background: var(--c-color-4);
  }

  .uiverse .wrapper .circle.circle-3,
  .uiverse .wrapper .circle.circle-4 {
    --background: var(--c-color-2);
    --blur: 14px;
  }

  .uiverse .wrapper .circle.circle-5,
  .uiverse .wrapper .circle.circle-6 {
    --background: var(--c-color-3);
    --blur: 16px;
  }

  .uiverse .wrapper .circle.circle-2,
  .uiverse .wrapper .circle.circle-7,
  .uiverse .wrapper .circle.circle-8,
  .uiverse .wrapper .circle.circle-11,
  .uiverse .wrapper .circle.circle-12 {
    --background: var(--c-color-1);
    --blur: 12px;
  }

  .uiverse .wrapper .circle.circle-1 {
    --x: 0;
    --y: -40px;
    --animation: circle-1;
  }

  .uiverse .wrapper .circle.circle-2 {
    --x: 92px;
    --y: 8px;
    --animation: circle-2;
  }

  .uiverse .wrapper .circle.circle-3 {
    --x: -12px;
    --y: -12px;
    --animation: circle-3;
  }

  .uiverse .wrapper .circle.circle-4 {
    --x: 80px;
    --y: -12px;
    --animation: circle-4;
  }

  .uiverse .wrapper .circle.circle-5 {
    --x: 12px;
    --y: -4px;
    --animation: circle-5;
  }

  .uiverse .wrapper .circle.circle-6 {
    --x: 56px;
    --y: 16px;
    --animation: circle-6;
  }

  .uiverse .wrapper .circle.circle-7 {
    --x: 8px;
    --y: 28px;
    --animation: circle-7;
  }

  .uiverse .wrapper .circle.circle-8 {
    --x: 28px;
    --y: -4px;
    --animation: circle-8;
  }

  .uiverse .wrapper .circle.circle-9 {
    --x: 20px;
    --y: -12px;
    --animation: circle-9;
  }

  .uiverse .wrapper .circle.circle-10 {
    --x: 64px;
    --y: 16px;
    --animation: circle-10;
  }

  .uiverse .wrapper .circle.circle-11 {
    --x: 4px;
    --y: 4px;
    --animation: circle-11;
  }

  .uiverse .wrapper .circle.circle-12 {
    --blur: 14px;
    --x: 52px;
    --y: 4px;
    --animation: circle-12;
  }

  @keyframes circle-1 {
    33% {
      transform: translate(0px, 16px) translateZ(0);
    }

    66% {
      transform: translate(12px, 64px) translateZ(0);
    }
  }

  @keyframes circle-2 {
    33% {
      transform: translate(80px, -10px) translateZ(0);
    }

    66% {
      transform: translate(72px, -48px) translateZ(0);
    }
  }

  @keyframes circle-3 {
    33% {
      transform: translate(20px, 12px) translateZ(0);
    }

    66% {
      transform: translate(12px, 4px) translateZ(0);
    }
  }

  @keyframes circle-4 {
    33% {
      transform: translate(76px, -12px) translateZ(0);
    }

    66% {
      transform: translate(112px, -8px) translateZ(0);
    }
  }

  @keyframes circle-5 {
    33% {
      transform: translate(84px, 28px) translateZ(0);
    }

    66% {
      transform: translate(40px, -32px) translateZ(0);
    }
  }

  @keyframes circle-6 {
    33% {
      transform: translate(28px, -16px) translateZ(0);
    }

    66% {
      transform: translate(76px, -56px) translateZ(0);
    }
  }

  @keyframes circle-7 {
    33% {
      transform: translate(8px, 28px) translateZ(0);
    }

    66% {
      transform: translate(20px, -60px) translateZ(0);
    }
  }

  @keyframes circle-8 {
    33% {
      transform: translate(32px, -4px) translateZ(0);
    }

    66% {
      transform: translate(56px, -20px) translateZ(0);
    }
  }

  @keyframes circle-9 {
    33% {
      transform: translate(20px, -12px) translateZ(0);
    }

    66% {
      transform: translate(80px, -8px) translateZ(0);
    }
  }

  @keyframes circle-10 {
    33% {
      transform: translate(68px, 20px) translateZ(0);
    }

    66% {
      transform: translate(100px, 28px) translateZ(0);
    }
  }

  @keyframes circle-11 {
    33% {
      transform: translate(4px, 4px) translateZ(0);
    }

    66% {
      transform: translate(68px, 20px) translateZ(0);
    }
  }

  @keyframes circle-12 {
    33% {
      transform: translate(56px, 0px) translateZ(0);
    }

    66% {
      transform: translate(60px, -32px) translateZ(0);
    }
  }`;

export default But;
