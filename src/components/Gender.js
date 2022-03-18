const Gender = props => {
    const classes = "flex items-center justify-between text-lg w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 " + props.className
    return (
      <span className={classes}>
        <span className="capitalize">{props.value}</span>
        <input
          className="cursor-pointer"
          name="gender"
          type="radio"
          value={props.value}
        />
      </span>
    );
}

export default Gender
