import React from "react";
import PropTypes from "prop-types"
export default function Bio(props) {
  return (
    <div>
      <p>I'm a futur {props.text} </p>
       <p>Esprit Student</p>
    </div>
  );
}

Bio.propTypes = {
  text: PropTypes.string
};

Bio.defaultProps = {
  text: 'Default'
};

