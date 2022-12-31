import React from "react";
import Chip from "@material-ui/core/Chip";

const Option = ({ text }) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return text ? (
    <Chip label={text} onClick={handleClick} onDelete={handleDelete} />
  ) : null;
};

export default Option;
