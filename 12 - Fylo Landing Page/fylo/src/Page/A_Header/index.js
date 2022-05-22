import { HeaderContainer } from "./styles";

import Img from '../../components/D_Images'

import fyloLogoImg from '../../images/logo.svg'



function Header (props) {
    return (
            <HeaderContainer>
                <Img src={fyloLogoImg} alt="Logo" fyloLogoImg/>
                <p>teste</p>
            </HeaderContainer>

            
            
        
    )
}

export default Header;