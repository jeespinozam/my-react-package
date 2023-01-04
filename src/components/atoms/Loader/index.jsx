import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const Loader = ({ isLoading }) => {
  let [color] = useState("#495c6f");

  return(
    <div>
      <ClipLoader
        color={color}
        loading={isLoading}
        size={80}
      />
    </div>
  );
};

export default Loader;
