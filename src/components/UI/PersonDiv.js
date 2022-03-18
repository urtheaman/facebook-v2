import RoundDiv from "./RoundDiv";

const PersonDiv = (props) => {
  const classes =
    "w-44 h-56 border border-gray-300 hover:shadow-mdb hover:border-0 cursor-pointer transition " +
    props.className;
  return <RoundDiv className={classes}>{props.children}</RoundDiv>;
};

export default PersonDiv;
