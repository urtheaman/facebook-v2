const InputFeild = (props) => {
  const classes =
    "focus:outline-none border border-gray-300 mb-3 p-3 w-full rounded-lg text-lg focus:border-blue-600 " +
    props.className;
  return (
    <input
      id={props.id}
      type={props.type}
      className={classes}
      placeholder={props.placeholder}
    />
  );
};

export default InputFeild;
