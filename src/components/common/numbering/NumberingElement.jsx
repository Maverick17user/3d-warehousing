import React from 'react';
import PropTypes from 'prop-types';

const NumberingElement = ({ number }) => {
  return (
    <div className="numbering_layer1">
      <span>{ number }</span>
    </div>
  );
};

NumberingElement.propTypes = {
  number: PropTypes.string.isRequired
};

export default NumberingElement;
