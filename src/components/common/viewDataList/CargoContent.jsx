import React from 'react';
import PropTypes from 'prop-types';

const CargoContent = ({ viewData }) => {
  return (
    <section className="viewDataSection__content_wrapper">
      <p><label>Package type:</label><span> box</span></p>
      <p><label>Size</label><span> 3m/3m</span></p>
    </section>
  );
};

CargoContent.propTypes = {
  // TODO: descript object in more details 
  viewData: PropTypes.object.isRequired
};

export default CargoContent;