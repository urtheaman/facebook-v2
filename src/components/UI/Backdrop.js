import ReactDOM from 'react-dom'
const Backdrop = (props) => {
  const classes = "h-full top-0 left-0 z-10 right-0 bottom-0 fixed flex items-center justify-center bg-backdrop " + props.className;
  return ReactDOM.createPortal(<div onClick={props.clickHandler} className={classes}>{props.children}</div>, document.getElementById('backdrop-root'));
};

export default Backdrop;
