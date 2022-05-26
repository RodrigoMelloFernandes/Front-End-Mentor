import { HeaderContainer } from "./styles";

import Img from "../../components/D_Images";
import Nav from "../../components/L_Nav";
import Title from "../../components/B_Title";
import Subtitle from "../../components/C_Subtitle";
import Input from "../../components/F_Input";
import Button from "../../components/E_Button";
import Container from "../../components/A_Containers";

import fyloLogoImg from "../../images/logo.svg";
import headerImg from "../../images/illustration-1.svg";

function Header(props) {
  return (
    <HeaderContainer>
      <Container MenuNavContainer>
        <Img src={fyloLogoImg} alt="Logo" fyloLogoImg />
        <Nav />
      </Container>

      <Container headerDesktopContainer>
        <Img src={headerImg} alt="headerImg" headerImg />

        <Container HeaderInfosContainer>
          <Title
            title="All your files in one secure location, accessible anywhere."
            titleHeader
          />
          <Subtitle
            content="Fylo stores your most important files in one secure location.
                            Access them wherever you need, share and collaborate with friends,
                            family, and co-workers."
                            
            subtitleHeader
          />
          <Input placeholder="Enter Your Email..." />
          <Button button__textLink="Get Stated" startedButton />
        </Container>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
