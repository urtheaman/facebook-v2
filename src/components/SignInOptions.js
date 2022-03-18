import LogoSignInButton from "./UI/LogoSignInButton"
import Modal from "./UI/Modal"

const SignInOptions = () => {
    return (
      <Modal>
        <h2 className="text-3xl text-center font-bold mb-8">
          Sign In Using Other Platforms
        </h2>
        <LogoSignInButton
          value="Sign In with Twitter"
          src="twitter.svg"
          alt="Twitter Logo"
        />
        <LogoSignInButton
          value="Sign In with Github"
          src="github.svg"
          alt="Github Logo"
        />
        <LogoSignInButton
          value="Sign In with Microsoft"
          src="microsoft.svg"
          alt="Microsoft Logo"
        />
        <LogoSignInButton
          value="Sign In with Whatsapp"
          src="whatsapp.svg"
          alt="Whatsapp Logo"
        />
        <LogoSignInButton
          value="Sign In with Yahoo"
          src="yahoo.svg"
          alt="Yahoo Logo"
        />
        <LogoSignInButton
          value="Sign In with Discord"
          src="discord.svg"
          alt="Discord Logo"
        />
        <LogoSignInButton
          value="Passwordless Sign In"
          src="privacy.svg"
          alt="Privacy Icon"
        />
      </Modal>
    );
}

export default SignInOptions
