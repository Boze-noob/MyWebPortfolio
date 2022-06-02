import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
    margin-top: 30px;
  }

  span{
    color: ${props => props.color};
  }

  progress[value] {
    width: ${props => props.width};
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 20px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 20px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width, text }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      <span>{text}</span>
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
