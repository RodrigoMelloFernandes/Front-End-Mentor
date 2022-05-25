import {FooterContainer} from './styles'
import Img from '../../components/D_Images'
import Subtitle from "../../components/C_Subtitle";
import FooterLinks from '../../components/G_Links/FooterLinks'
import FacebookIcon from '../../components/G_Links/SocialMediaLinks/Facebook'
import InstagramIcon from '../../components/G_Links/SocialMediaLinks/Instagram';
import TwitterIcon from '../../components/G_Links/SocialMediaLinks/Twitter'
import Container from '../../components/A_Containers';

import fyloLogoImg from '../../images/logo.svg'
import iconPhone from '../../images/icon-phone.svg'
import iconEmail from '../../images/icon-email.svg'

function Footer (props) {
    return (
        <FooterContainer >
            <Container footerDesktop>
                <Img
                    src={fyloLogoImg}
                    alt="Logo"
                    fyloLogoImg
                />
                <Img
                    src={iconPhone}
                    alt="iconPhone"
                    iconPhone
                />
                <Subtitle
                    content="Phone: +1-543-123-4567"
                    subtitleFooter
                />
                <Img
                    src={iconEmail}
                    alt="iconEmail"
                    iconEmail
                />
                <Subtitle
                    content="example@fylo.com"
                    subtitleFooter
                />
            </Container>

            <Container footerDesktop>
                <FooterLinks textLink="About Us"/>
                <FooterLinks textLink="Jobs"/>
                <FooterLinks textLink="Press"/>
                <FooterLinks textLink="Blog"/>
            </Container>
            <Container footerDesktop>
                <FooterLinks textLink="Contact Us"/>
                <FooterLinks textLink="Terms"/>
                <FooterLinks textLink="Privacy"/>
            </Container>

            <Container footerDesktop>
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
            </Container>

             
        </FooterContainer>
    )        
}

export default Footer;