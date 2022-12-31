import React from "react";
import ContentEditable from "react-contenteditable";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  editable: {
    fontFamily: "sans-serif",
    resize: "none",
    outline: "none",
  },
}));

const Content = (props) => {
  const [html, setHtml] = React.useState(props.html);
  const [editable, setEditable] = React.useState(true);
  const classes = useStyles();

  const handleChange = (evt) => {
    setHtml(evt.target.value);
  };

  const handleKeyUp = (evt, id) => {
    if (evt.shiftKey && evt.key === ":") {
      props.onKeyUpHandle(evt, id);
    }
  };

  const handleBlur = (event, id) => {
    props.onHandleBlur(event.target.innerHTML, props.type, id);
  };

  return (
    <ContentEditable
      className={clsx(classes.editable, props.className)}
      tagName="pre"
      id={props.id}
      html={html}
      disabled={!editable}
      onChange={handleChange}
      onKeyUp={(evt, id) => handleKeyUp(evt, props.id)}
      onBlur={(event) => handleBlur(event, props.id)}
    />
  );
};

export default Content;
