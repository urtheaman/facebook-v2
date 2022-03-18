const Select = (props) => {
    const classes = "p-3 cursor-pointer w-full rounded-lg text-lg border border-gray-300 focus:outline-none focus:border-blue-600 " + props.className;
    return (
        <select className={classes}>
            {props.list.map((data,index) => {return <option key={index}>{data}</option>})}
        </select>
    )
}

export default Select
