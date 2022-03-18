const Anchor = props => {
    const classes = "hover:underline " + props.className;
  return <a href={props.href} className={classes}>{props.children}</a>;
};

export default Anchor;
