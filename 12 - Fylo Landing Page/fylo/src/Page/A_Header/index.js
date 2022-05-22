import { HeaderContainer, MenuNavBar } from "./styles";

import Img from '../../components/D_Images'
import Ul from '../../components/H_Ul'


import fyloLogoImg from '../../images/logo.svg'



function Header (props) {
    return (
            <HeaderContainer>
                        <Img src={fyloLogoImg} alt="Logo" fyloLogoImg/>
                    
                        <Ul>
                            
                        </Ul>
                        
                        
                    
                
            </HeaderContainer>

            
            
        
    )
}

export default Header;