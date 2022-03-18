import Button from "./Button";

const LogoSignInButton = (props) => {
  const classes = "bg-white w-full text-xl border flex items-center justify-center border-gray-400 mt-3 " + props.className
  return (
    <Button className={classes}>
      <img className="w-7 mr-2" src={props.src} alt={props.alt} />
      <span>{props.value || "Sign In"}</span>
    </Button>
  );
};

export default LogoSignInButton;
