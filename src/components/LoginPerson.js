import { XCircleIcon } from "@heroicons/react/solid";
import PersonDiv from "./UI/PersonDiv";

const LoginPerson = (props) => {
  return (
    <PersonDiv className="flex relative flex-col items-center">
      <img
        className="w-full h-4/5 object-cover rounded-t-lg object-center"
        src={props.img}
        title={props.firstname + " " + props.lastname}
        alt=""
      />
      <span className="text-lg w-full h-1/5 flex items-center justify-center">
        {props.firstname}
      </span>
      <XCircleIcon
        className="w-6 text-gray-600 absolute left-1 top-1 hover:w-8 hover:-left-1 hover:-top-1"
        title="Remove Account"
      />
      {props.nots ? (
        <span
          className="absolute -top-2 -right-2 rounded-full w-7 h-7 text-white text-sm flex items-center justify-center bg-red-600 shadow-mdb cursor-default"
          title={props.nots + " new notifications"}
        >
          {props.nots}
        </span>
      ) : null }
    </PersonDiv>
  );
};

export default LoginPerson;
