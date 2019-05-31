import React from 'react';
import PropTypes from 'prop-types';

function Floof({ image, clickHandler }) {
  return (
    <img onClick={clickHandler} src={image} />
  );
}

Floof.propTypes = {
  image: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Floof;
