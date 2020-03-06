import React from 'react';
import PropTypes from 'prop-types';

const SectionContent = ({ viewData }) => {
  return (
    <section className="viewDataSection__content_wrapper">
      <p><label>Cargo units:</label><span> 25</span></p>
      <p><label>Cargo types:</label><span> apples, melons, juice</span></p>
    </section>
  );
};

SectionContent.propTypes = {
  // TODO: descript object in more details 
  viewData: PropTypes.object.isRequired
};

export default SectionContent;