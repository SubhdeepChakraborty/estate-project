import React from "react";
import "./toggle.css";

const Toggle = ({ setOpen }) => {
  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>button</button>
    </div>
  );
};

export default Toggle;
