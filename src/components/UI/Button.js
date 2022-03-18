const Button = props => {
    const classes = 'py-3 rounded-md font-semibold mt-1 focus:outline-none ' + props.className
    return (
        <button type={props.type} onClick={props.onClick} className={classes}>{props.children}</button>
    )
}

export default Button
