import React from "react";
import Option from "./Option";
import Content from "./Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  optionContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const Options = ({ elements }) => {
  const classes = useStyles();

  return (
    <div className={classes.optionContainer}>
      {elements.map((item) => {
        return item.type === "SelectionOption" ? (
          <Option text={item.text} key={item.id} />
        ) : (
          <Content html={item.text} id={item.id} key={item.id} />
        );
      })}
      <Option />
    </div>
  );
};

export default Options;
