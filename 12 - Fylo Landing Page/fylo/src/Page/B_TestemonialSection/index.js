import { TestemonialSectionContainer } from "./styles";

import Img from "../../components/D_Images";
import Title from "../../components/B_Title";
import Subtitle from "../../components/C_Subtitle";
import TestemonialLinks from "../../components/G_Links/TestemonialLinks";
import Container from "../../components/A_Containers";
import Hr from '../../components/M_Br/index'
import curveMobile from "../../images/bg-curve-mobile.svg";
import iconArrow from "../../images/icon-arrow.svg";
import iconQuotes from "../../images/icon-quotes.svg";
import signKyleImg from "../../images/avatar-testimonial.jpg";
import testemonialImg from '../../images/illustration-2.svg'

function TestemonialSection(props) {
  return (
    <TestemonialSectionContainer>
      <Img src={curveMobile} alt="curveMobile" curveMobile />

      <Container TestemonialDesktopContainer>
        <Img src={testemonialImg} alt="testemonialImg" testemonialImg />

        <Title title="Stay productive, wherever you are" titleTestemonial />
        <Subtitle
          content="Never let location be an issue when accessing your files. Fylo has you
                    covered for all of your file storage needs."
          subtitleTestemonial
        />
        <Subtitle
          content="Securely share files and folders with friends, family and colleagues for
                    live collaboration. No email attachments required!"
          subtitleTestemonial
        />


        <Container TestemonialLinksContainer>
            <Container TestemonialLinksContainerBox>
                <TestemonialLinks textLink="See How Fylo Works" />
                <Img src={iconArrow} alt="iconArrow" iconArrow />
            </Container>
            <Hr/>
        </Container>

        <Container TestemonialCard>
          <Img src={iconQuotes} alt="iconQuotes" iconQuotes />
          <Subtitle
            content="Fylo has improved our team productivity by an order of magnitude. Since
                            making the switch our team has become a well-oiled collaboration machine.
                            "
            subtitleTestemonialCard
          />

          <Container TestemonialCardInsideContainer>
              <Img src={signKyleImg} alt="signKyleImg" signKyleImg />
              <Container TestemonialCardInsideContainerBox>
                  <Title title="Kyle Burton" titleTestemonialCard />
                  <Subtitle
                    content="Founder &amp; CEO, Huddle"
                    subtitleTestemonialCard
                  />
              </Container>
          </Container>
        </Container>
      </Container>
    </TestemonialSectionContainer>
  );
}

export default TestemonialSection;
