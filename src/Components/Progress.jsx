import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`

div{
  width: ${props => parseFloat(props.width) * 1.5 };
    margin-top: 30px;
}

div:hover progress[value] {
  animation-name: progressBar;
  animation-iteration-count: 1;
  animation-duration: 2s;
}


  span {
    color: ${props => props.color};
    padding-left: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  span:hover{
    color: #eee;
  }

  progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;
  }
  
  @keyframes progressBar {
    0% {
      width: 10%;
    }
    
    100% {
      width: ${props => props.width};
    }
  }

  progress[value]::-webkit-progress-bar {
    height: 25px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 25px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width, text }) => {
  return (
    <Container color={color} width={width}>
      <div>
      <progress value={value} max={max} />
      <span>{text}</span>
      </div>
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px"
};

export default ProgressBar;
