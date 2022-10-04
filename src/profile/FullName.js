import React from "react";
import PropTypes from 'prop-types';
export default function FullName(props) {
  const styleName={fontSize:"16px",marginBottom: "20px"}

  return (
    <div style={styleName} onMouseMove={props.handleName}>
      {props.children}
      <h1> {props.name}</h1>
    </div>
  );
}
FullName.propTypes = {
  name: PropTypes.string
};

FullName.defaultProps = {
  name: 'Default'
};
