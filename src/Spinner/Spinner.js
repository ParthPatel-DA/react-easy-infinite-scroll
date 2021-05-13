import React from "react";

import "./Spinner.scss";

const Spinner = (props) => {
  const { withoutMargin, loaderColor } = props;
  return (
    <div
      className={`loader ${withoutMargin ? "without-margin" : ""}`}
      style={loaderColor && { color: loaderColor }}
    />
  );
};

export default Spinner;
