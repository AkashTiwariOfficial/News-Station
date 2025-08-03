import React from "react";
import loading from "./loading.gif";
import loadingbg from "./loadingbg.gif";

const Spinner = (props) => {
  return (
    <div className="text-center my-4">
      {props.mode === "dark" ? (
        <img src={loadingbg} alt="loadingbg" />
      ) : (
        <img src={loading} alt="loading" />
      )}
    </div>
  );
};

export default Spinner;
