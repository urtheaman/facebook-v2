import { XIcon } from "@heroicons/react/solid";
import Gender from "./Gender";
import Button from "./UI/Button";
import InputFeild from "./UI/InputFeild";
import Modal from "./UI/Modal";
import Select from "./UI/Select";

const SignUp = props => {
    const dayList = ['Day']
    for (let i=1; i<32; i++) dayList.push(i)
    const monthList = ['Month']
    for (let i=1; i<13; i++) monthList.push(i)
    const yearList = ['Year']
    for (let i=new Date().getFullYear(); i>1970; i--) yearList.push(i)
    return (
      <Modal>
        <div className="flex justify-between items-center border-b pb-4 border-gray-400">
          <h1 className="text-3xl font-bold leading-9">
            Sign Up
            <span className="block text-sm font-normal">
              It's quick and easy.
            </span>
          </h1>
          <XIcon onClick={props.clickHandler} className="w-8 cursor-pointer" />
        </div>
        <div className="flex mt-4">
          <InputFeild className="mr-4" type="text" placeholder="First Name" />
          <InputFeild type="text" placeholder="Surname" />
        </div>
        <InputFeild type="text" placeholder="Mobile number or email address" />
        <InputFeild type="password" placeholder="New Password" />
        <span> Date Of Birth</span>
        <div className="flex justify-between my-2">
          <Select className="mr-4" list={dayList} />
          <Select className="mr-4" list={monthList} />
          <Select list={yearList} />
        </div>
        <label HTMLfor="gender"> Gender</label>
        <div className="flex justify-between my-2">
          <Gender className="mr-4" value="female" />
          <Gender className="mr-4" value="male" />
          <Gender value="custom" />
        </div>
        <p className="text-xs text-center">
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </p>
        <Button className="bg-fb-green text-white w-full mt-4">Sign Up</Button>
      </Modal>
    );
}

export default SignUp
