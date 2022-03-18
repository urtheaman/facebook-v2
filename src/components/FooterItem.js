import Anchor from "./UI/Anchor";

const FooterItem = (props) => {
  const classes = "mr-4 mb-2 " + props.className
    return (
      <li title={props.title} className={classes}>
        <Anchor href="">{props.content}</Anchor>
      </li>
    );
}

export default FooterItem
