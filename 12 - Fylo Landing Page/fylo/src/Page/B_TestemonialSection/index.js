import {TestemonialSectionContainer} from './styles'

import Img from '../../components/D_Images'
import Title from '../../components/B_Title'
import Subtitle from "../../components/C_Subtitle"
import TestemonialLinks from '../../components/G_Links/TestemonialLinks'
import Br from '../../components/M_Br'
import {StyledTestemonialCard} from '../../components/A_Containers/styles'
import Container from '../../components/A_Containers'

import curveMobile from '../../images/bg-curve-mobile.svg'
import iconArrow from '../../images/icon-arrow.svg'
import iconQuotes from '../../images/icon-quotes.svg'
import signKyleImg from '../../images/avatar-testimonial.jpg'


function TestemonialSection (props) {
    return (
        <TestemonialSectionContainer>
            <Img 
                src={curveMobile} 
                alt="curveMobile" 
                curveMobile
            />

            <Container TestemonialDesktopContainer>
                <Title
                    title="Stay productive, wherever you are"
                    titleTestemonial
                />
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
                <TestemonialLinks textLink="See How Fylo Works"/>
                <Img
                    src={iconArrow}
                    alt="iconArrow"
                    iconArrow
                />
                <Br/>
                
                    <StyledTestemonialCard>
                        <Img
                            src={iconQuotes}
                            alt="iconQuotes"
                            iconQuotes
                        />
                        <Subtitle
                            content="Fylo has improved our team productivity by an order of magnitude. Since
                            making the switch our team has become a well-oiled collaboration machine.
                            "
                            subtitleTestemonialCard
                        />
                        <Img
                            src={signKyleImg}
                            alt="signKyleImg"
                            signKyleImg
                        />
                        <Title title="Kyle Burton" titleTestemonialCard/>
                        <Subtitle
                            content="Founder &amp; CEO, Huddle"
                            subtitleTestemonialCard
                        />
                    </StyledTestemonialCard>
                
            </Container>


        </TestemonialSectionContainer>
    )
}

export default TestemonialSection;