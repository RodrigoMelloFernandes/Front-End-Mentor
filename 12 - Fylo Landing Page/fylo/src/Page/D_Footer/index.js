import {FooterContainer} from './styles'
import Img from '../../components/D_Images'
import Subtitle from "../../components/C_Subtitle";

import fyloLogoImg from '../../images/logo.svg'
import iconPhone from '../../images/icon-phone.svg'

function Footer (props) {
    return (
        <FooterContainer>
            <Img 
                src={fyloLogoImg} alt="Logo" 
                fyloLogoImg
            /> 

            <Img 
                src={iconPhone} 
                alt="iconPhone" 
                iconPhone
            /> 
        </FooterContainer>
    )        
}

export default Footer;