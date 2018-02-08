import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <Container height="50" width="50">
    <Circle cx="25" cy="25.2" r="19.9" fill="none" strokeWidth="6" strokeMiterlimit="10" />
  </Container>
);

export default Spinner;

const Container = styled.svg`
  width:50px; 
  height:50px;
  animation: rotate 2s linear infinite;

  @-webkit-keyframes rotate {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
  }
  
  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
`;

const Circle = styled.circle`
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  color 6s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
  stroke: #3f88f8;
  
  @keyframes dash {
    0%   {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50%  { 
      stroke-dasharray: 89,200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -124;
    }
  }

  @keyframes color {
    0%   {stroke: #3f88f8;}
    20%  {stroke: #3f88f8;}
    25%  {stroke: #dd413b;}
    45%  {stroke: #dd413b;}
    50%  {stroke: #f6ae2e;}
    70%  {stroke: #f6ae2e;}
    75%  {stroke: #259a5d;}
    95%  {stroke: #259a5d;}
  }
`;