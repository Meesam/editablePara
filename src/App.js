import React from "react";
import Content from "./Content";
import Options from "./Options";
import { makeStyles } from "@material-ui/core/styles";
import uuid from "react-uuid";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    width: "50%",
    marginLeft: "10%",
    border: "1px dashed #aaa",
    display: "flex",
    paddingLeft: "5px",
  },
  newContent: {
    backgroundColor: "antiquewhite",
    border: "1px solid #c7842a",
    width: "10%",
    borderRadius: "50px",
    padding: 5,
  },
}));

const appdata = [
  {
    id: "327e7139-d912-4549-93c8-129914d56d98",
    isOptionItem: false,
    imperialUnits: "",
    metricUnits: "",
    optionItemState: null,
    fieldId: "",
    text: "Handle ",
    type: "Text",
    placeholderText: null,
    changeType: null,
    isBestPractice: false,
    isGlobalBestPractice: false,
    authoredUserId: "",
    elements: [],
    __typename: "TextContentElement",
  },
  {
    id: "9187e4f2-942b-4f68-a75c-a30d7606063d",
    isOptionItem: false,
    imperialUnits: "",
    metricUnits: "",
    optionItemState: null,
    fieldId: "",
    text: "",
    type: "OptionGroup",
    placeholderText: null,
    changeType: null,
    isBestPractice: false,
    isGlobalBestPractice: false,
    authoredUserId: "",
    elements: [
      {
        id: "5b2e230d-82bb-4d03-8b31-27ac69fa6e82",
        isOptionItem: true,
        imperialUnits: "",
        metricUnits: "",
        optionItemState: null,
        fieldId: "",
        text: "catch basins",
        type: "SelectionOption",
        placeholderText: null,
        changeType: null,
        isBestPractice: false,
        isGlobalBestPractice: false,
        authoredUserId: "",
        elements: [],
        __typename: "TextContentElement",
      },
      {
        id: "ac510e8e-3152-4bfb-b0f6-f569459377a2",
        isOptionItem: false,
        imperialUnits: "",
        metricUnits: "",
        optionItemState: null,
        fieldId: "",
        text: " ",
        type: "Text",
        placeholderText: null,
        changeType: null,
        isBestPractice: false,
        isGlobalBestPractice: false,
        authoredUserId: "",
        elements: [],
        __typename: "TextContentElement",
      },
      {
        id: "df72094a-14e9-40e3-b300-7a1d74caaef1",
        isOptionItem: true,
        imperialUnits: "",
        metricUnits: "",
        optionItemState: null,
        fieldId: "",
        text: "and",
        type: "SelectionOption",
        placeholderText: null,
        changeType: null,
        isBestPractice: false,
        isGlobalBestPractice: false,
        authoredUserId: "",
        elements: [],
        __typename: "TextContentElement",
      },
      {
        id: "67b89d90-cb3d-4dd0-ba9d-e958f1b23120",
        isOptionItem: false,
        imperialUnits: "",
        metricUnits: "",
        optionItemState: null,
        fieldId: "",
        text: " ",
        type: "Text",
        placeholderText: null,
        changeType: null,
        isBestPractice: false,
        isGlobalBestPractice: false,
        authoredUserId: "",
        elements: [],
        __typename: "TextContentElement",
      },
      {
        id: "86b972f7-71e9-4d26-b7ac-3efd6d911e1b",
        isOptionItem: true,
        imperialUnits: "",
        metricUnits: "",
        optionItemState: null,
        fieldId: "",
        text: "stormwater inlets",
        type: "SelectionOption",
        placeholderText: null,
        changeType: null,
        isBestPractice: false,
        isGlobalBestPractice: false,
        authoredUserId: "",
        elements: [],
        __typename: "TextContentElement",
      },
    ],
    __typename: "TextContentElement",
  },
  {
    id: "651be60d-2eea-46a4-9016-cdbbad511a53",
    isOptionItem: false,
    imperialUnits: "",
    metricUnits: "",
    optionItemState: null,
    fieldId: "",
    text: " in accordance with manufacturer's written rigging instructions.",
    type: "Text",
    placeholderText: null,
    changeType: null,
    isBestPractice: false,
    isGlobalBestPractice: false,
    authoredUserId: "",
    elements: [],
    __typename: "TextContentElement",
  },
];

const App = () => {
  const classes = useStyles();
  const [data, setData] = React.useState(appdata);

  const onKeyUpHandle = (event, id) => {
    const elementNodes = [...event.currentTarget.childNodes];
    const splitArr = elementNodes[0].data.split(":");
    let addeddata1 = {
      id: uuid(),
      isOptionItem: false,
      imperialUnits: "",
      metricUnits: "",
      optionItemState: null,
      fieldId: "",
      text: splitArr[0],
      type: "Text",
      placeholderText: null,
      changeType: null,
      isBestPractice: false,
      isGlobalBestPractice: false,
      authoredUserId: "",
      elements: [],
      __typename: "TextContentElement",
    };
    let addeddata3 = {
      id: uuid(),
      isOptionItem: false,
      imperialUnits: "",
      metricUnits: "",
      optionItemState: null,
      fieldId: "",
      text: splitArr[1],
      type: "Text",
      placeholderText: null,
      changeType: null,
      isBestPractice: false,
      isGlobalBestPractice: false,
      authoredUserId: "",
      elements: [],
      __typename: "TextContentElement",
    };
    let addeddata2 = {
      id: uuid(),
      isOptionItem: false,
      imperialUnits: "",
      metricUnits: "",
      optionItemState: null,
      fieldId: "",
      text: "",
      type: "NewText",
      placeholderText: null,
      changeType: null,
      isBestPractice: false,
      isGlobalBestPractice: false,
      authoredUserId: "",
      elements: [],
      __typename: "TextContentElement",
    };
    removeObjectWithId(data, id);
    setData([...data, addeddata1, addeddata2, addeddata3]);
  };

  const onHandleBlur = (text, type, id) => {
    if (type === "NewText") {
      const objWithIndex = data.findIndex((obj) => obj.id === id);
      removeObjectWithId(data, id);
      let newelyAddedPillsObj = {
        id: uuid(),
        isOptionItem: false,
        imperialUnits: "",
        metricUnits: "",
        optionItemState: null,
        fieldId: "",
        text: "",
        type: "OptionGroup",
        placeholderText: null,
        changeType: null,
        isBestPractice: false,
        isGlobalBestPractice: false,
        authoredUserId: "",
        elements: [
          {
            id: uuid(),
            isOptionItem: true,
            imperialUnits: "",
            metricUnits: "",
            optionItemState: null,
            fieldId: "",
            text: text,
            type: "SelectionOption",
            placeholderText: null,
            changeType: null,
            isBestPractice: false,
            isGlobalBestPractice: false,
            authoredUserId: "",
            elements: [],
            __typename: "TextContentElement",
          },
        ],
      };
      const result = insert(data, objWithIndex, newelyAddedPillsObj);
      setData(result);
    }
  };

  const removeObjectWithId = (arr, id) => {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  };

  const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];

  console.log("data ", data);
  return (
    <div className={classes.appContainer}>
      {data.map((item) => {
        return item.type === "Text" || item.type === "NewText" ? (
          <Content
            html={item.text}
            id={item.id}
            key={item.id}
            onKeyUpHandle={onKeyUpHandle}
            className={item.type === "NewText" ? classes.newContent : undefined}
            type={item.type}
            onHandleBlur={onHandleBlur}
          />
        ) : item.type === "OptionGroup" ? (
          <Options elements={item.elements} key={item.id} />
        ) : null;
      })}
    </div>
  );
};

export default App;
