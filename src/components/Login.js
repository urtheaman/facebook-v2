import LoginPerson from "./LoginPerson";
import RoundDiv from "./UI/RoundDiv";
import { PlusCircleIcon } from "@heroicons/react/solid";
import InputFeild from "./UI/InputFeild";
import PersonDiv from "./UI/PersonDiv";
import Button from "./UI/Button";
import { useState, Fragment } from "react";
import Anchor from "./UI/Anchor";
import FooterItem from "./FooterItem";
import Bakcdrop from "./UI/Backdrop";
import SignUp from "./SignUp";
import SignInOptions from "./SignInOptions";
import Backdrop from "./UI/Backdrop";
import LogoSignInButton from "./UI/LogoSignInButton";

const Login = () => {
  const [signupModal, setSignupModal] = useState(false);
  const [signInOptions, setSignInOptions] = useState(false);
  const createAccountHandler = () => setSignupModal(true);
  const backdropClickHandler = () => {setSignupModal(false); setSignInOptions(false)};
  const signInOptionsHandler = () => setSignInOptions(true);
  return (
    <Fragment>
      {signupModal === true ? (
        <Fragment>
          <Bakcdrop></Bakcdrop>
          <SignUp clickHandler={backdropClickHandler} />
        </Fragment>
      ) : null}
      {signInOptions === true ? (
        <Fragment>
          <Backdrop clickHandler={backdropClickHandler}></Backdrop>
          <SignInOptions />
        </Fragment>
      ) : null}
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col min-h-screen items-center lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="logo.svg"
              alt="Facebook logo"
              className="w-48 mt-2 lg:mt-0 lg:-ml-5"
            ></img>
            <h1 className="text-2xl text-center">Recent Logins</h1>
            <span className="text-gray-600">
              Click your picture or add an account.
            </span>

            <div className="mt-8 grid grid-flow-rows grid-cols-2 lg:grid-cols-3 gap-4">
              <LoginPerson
                img="accountImages/ac1.jpg"
                firstname="Stephen"
                lastname="Grider"
                nots="9"
              />
              <LoginPerson
                img="accountImages/ac2.jpg"
                firstname="Jessica"
                lastname="Chan"
              />
              <LoginPerson
                img="accountImages/ac3.jpg"
                firstname="Emma"
                lastname="Watson"
                nots="24"
              />
              <PersonDiv className="flex flex-col items-center">
                <div className="bg-gray-100 h-4/5 w-full rounded-t-lg flex items-center justify-center">
                  <PlusCircleIcon className="w-14 text-blue-600" />
                </div>
                <span className="text-lg font-semibold w-full h-1/5 flex items-center justify-center text-blue-600">
                  Add Account
                </span>
              </PersonDiv>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <RoundDiv className="p-4 w-4/5 max-w-xl my-8 flex flex-col items-center shadow-xl">
              <form className="w-full">
                <InputFeild
                  type="text"
                  placeholder="Email address or phone number"
                />
                <InputFeild type="password" placeholder="Password" />
                <Button
                  className="bg-blue-600 text-white w-full text-2xl"
                  type="submit"
                >
                  Login
                </Button>
              </form>
              <div className="flex w-full">
                  <LogoSignInButton className="mr-2" src="google-icon.svg" alt="Google Icon" />
                  <LogoSignInButton src="Apple_logo_black.svg" alt="Apple Logo" />
              </div>
              <div className="flex flex-col items-center w-full">
                <button className="mt-4 focus:outline-none" onClick={signInOptionsHandler}>
                  <Anchor className="text-gray-600 cursor-pointer">
                    More Signin Options...
                  </Anchor>
                </button>
                <Anchor href="" className="text-blue-600 my-2">
                  Forgotten Password?
                </Anchor>
              </div>
              <hr width="100%" height="2px" />
              <Button
                onClick={createAccountHandler}
                className="bg-fb-green text-white text-lg mt-8 w-3/5"
              >
                Create New Account
              </Button>
            </RoundDiv>
            <span className="mb-8">
              <Anchor href="" className="font-semibold">
                Create a Page
              </Anchor>{" "}
              for a celebrity, band or business.
            </span>
          </div>
        </div>
      </div>
      <footer className="bg-white w-full text-xs p-6 pb-4">
        <ul className="flex flex-wrap py-2 text-blue-600 border-b border-gray-300">
          <li className="mr-4 text-gray-500 mb-2">English(UK)</li>
          <FooterItem title="Hindi" content="हिन्दी" />
          <FooterItem title="Marathi" content="मराठी" />
          <FooterItem title="Urdu" content="اردو" />
          <FooterItem title="Telugu" content="ಕನ್ನಡ" />
          <FooterItem title="Malyalam" content="മലയാളം" />
          <FooterItem title="Madrasi" content="తెలుగు" />
          <FooterItem title="Kanada" content="தமிழ்" />
          <FooterItem title="Gujrati" content="ગુજરાતી" />
          <FooterItem title="Bangla" content="বাংলা" />
          <FooterItem title="Punjabi" content="ਪੰਜਾਬੀ" />
          <button
            title="More Languages"
            className="bg-gray-200 text-center px-4 text-black rounded-sm focus:outline-none"
          >
            More
          </button>
        </ul>
        <ul className="flex flex-wrap py-2 text-blue-600">
          <FooterItem title="Sign Up for Facebook" content="Sign Up" />
          <FooterItem title="Log in to Facebook" content="Log In" />
          <FooterItem title="Take a look at Messenger" content="Messenger" />
          <FooterItem
            title="Facebook Lite for Android"
            content="Facebook Lite"
          />
          <FooterItem title="Browse our watch videos" content="Watch" />
          <FooterItem title="Browse our people directory" content="People" />
          <FooterItem title="Browse our pages directory" content="Pages" />
          <FooterItem title="" content="Pages categories" />
          <FooterItem
            title="Take a look at popular places on Facebook"
            content="Places"
          />
          <FooterItem title="Check out Facebook games" content="Games" />
          <FooterItem title="Browse our places directory" content="Locations" />
          <FooterItem
            title="Buy and sell on Facebook Marketplace"
            content="Marketplace"
          />
          <FooterItem
            title="Learn More about Facebook Pay"
            content="Facebook Pay"
          />
          <FooterItem title="Browse our groups directory" content="Groups" />
          <FooterItem
            title="Apply for jobs and hire on Facebook"
            content="Jobs"
          />
          <FooterItem title="Learn more about Oculus" content="Oculus" />
          <FooterItem
            title="Learn more about portal from Facebook"
            content="Portal"
          />
          <FooterItem title="Take a look at instagram" content="Instagram" />
          <FooterItem
            title="Browse our local lists directory"
            content="Local"
          />
          <FooterItem title="Donate to worthy causes" content="Fundraisers" />
          <FooterItem
            title="Browse our Facebook services directory"
            content="Services"
          />
          <FooterItem
            title="See the voting information centre"
            content="Voting Information Centre"
          />
          <FooterItem
            title="Read our blog, discover the resource centre and find job opportunities"
            content="About"
          />
          <FooterItem title="Advertise on Facebook" content="Create Ad" />
          <FooterItem title="Create a Page" content="Create Page" />
          <FooterItem title="Develop on our Platform" content="Developers" />
          <FooterItem
            title="Make your next career move to our next Brilliant Company"
            content="Careers"
          />
          <FooterItem
            title="Learn about your privacy and Facebook"
            content="Privacy"
          />
          <FooterItem
            title="Learn about cookies and Facebook"
            content="Cookies"
          />
          <FooterItem title="Learn about AdChoices" content="AdChoices" />
          <FooterItem title="Review our terms and policies" content="Terms" />
          <FooterItem title="Visit our help centre" content="Help" />
        </ul>
        <span className="text-gray-600">
          Facebook &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </Fragment>
  );
};

export default Login;
