import React from 'react';
import PropTypes from 'prop-types';
import AreaContent from './AreaContent';
import CargoContent from './CargoContent';
import SectionContent from './SectionContent';

const ViewDataList = ({ title, viewData, dataType }) => {

  let content;

  if (dataType === 'area') {
    content = <AreaContent viewData={viewData}/>;
  }
  else if (dataType === 'section') {
    content = <CargoContent viewData={viewData}/>;
  }
  else if (dataType === 'cargo') {
    content = <SectionContent viewData={viewData}/>;
  }

  return (
    <section className="viewDataSection">
      <div className="viewDataSection__title_wrapper">
        <p>{ title }</p>
        <hr />
      </div>
      <div className="viewDataSection__content_wrapper">
        { content }
      </div>
      <div className="viewDataSection__button_wrapper">
        <button>
          Move to
        </button>
      </div>
    </section>
  );
};

ViewDataList.propTypes = {
  title: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
  // TODO: descript object in more details 
  viewData: PropTypes.object.isRequired
};

export default ViewDataList;
