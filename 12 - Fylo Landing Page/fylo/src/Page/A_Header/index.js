import { HeaderContainer} from "./styles";

import Img from '../../components/D_Images'
import Nav from '../../components/L_Nav'
import Ul from '../../components/H_Ul'


import fyloLogoImg from '../../images/logo.svg'



function Header (props) {
    return (
            <HeaderContainer>
                        <Img src={fyloLogoImg} alt="Logo" fyloLogoImg/>
                        <Nav></Nav>
                        <Ul></Ul>
            </HeaderContainer>

            
            
        
    )
}

export default Header;