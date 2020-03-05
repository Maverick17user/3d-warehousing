import React from 'react';
import PropTypes from 'prop-types';

const AreaContent = ({ viewData }) => {
  return (
    <section className="viewDataSection__content_wrapper">
      <p><label>Sections:</label><span> 3</span></p>
      <p><label>Free space:</label><span> 5m</span></p>
    </section>
  );
};

AreaContent.propTypes = {
  // TODO: descript object in more details 
  viewData: PropTypes.object.isRequired
};

export default AreaContent;
