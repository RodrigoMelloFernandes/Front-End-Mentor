import { SignUpSectionContainer } from "./styles";
import Title from "../../components/B_Title";
import Subtitle from "../../components/C_Subtitle";
import Input from "../../components/F_Input";
import Button from "../../components/E_Button";
import Container from "../../components/A_Containers";

function SignUpSection(props) {
  return (
    <SignUpSectionContainer>
      <Container SignUpDesktop>
        <Title title="Get early access today" titleSignUp />
        <Subtitle
          content="It only takes a minute to sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you."
          subtitleSignUp
        />
      </Container>

      <Container SignUpDesktopBox>
        <Input placeholder="email@example.com" InputSign/>
        <Button button__textLink="Get Staterd For Free" startedButton />
      </Container>
    </SignUpSectionContainer>
  );
}

export default SignUpSection;
