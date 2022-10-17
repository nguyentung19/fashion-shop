import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  return (
    <div
      className={`
      grid grid-col-${props.col} 
      grid-col-md-${props.mdCol} 
      grid-col-sm-${props.smCol}`}
      style={{ gap: `${props.gap}px` }}
    >
      {props.children}
    </div>
  );
};

Grid.propsType = {
  col: PropTypes.number,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;
