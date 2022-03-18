const RoundDiv = (props) => {
    const classes = 'rounded-lg bg-white ' + props.className
  return <div className={classes}>{props.children}</div>;
};

export default RoundDiv;
