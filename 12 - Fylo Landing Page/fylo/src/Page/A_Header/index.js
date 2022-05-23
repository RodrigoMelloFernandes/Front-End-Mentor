import {HeaderContainer} from "./styles";

import Img from '../../components/D_Images'
import Nav from '../../components/L_Nav'
import Title from '../../components/B_Title'
import Subtitle from "../../components/C_Subtitle";
import Input from '../../components/F_Input'
import Button from "../../components/E_Button";
import { StyledMenuNavContainer , StyledHeaderInfosContainer, StyledHeaderDesktopContainer} from "../../components/A_Containers/styles";



import fyloLogoImg from '../../images/logo.svg'
import headerImg from '../../images/illustration-1.svg'



function Header (props) {
    return (
            <HeaderContainer>
                        
                            <StyledMenuNavContainer>
                                <Img
                                    src={fyloLogoImg} alt="Logo"
                                    fyloLogoImg
                                />
                                <Nav/>
                            </StyledMenuNavContainer>
                        

                        <StyledHeaderDesktopContainer>
                            <Img
                                src={headerImg} alt="headerImg"
                                headerImg
                            />
                            <StyledHeaderInfosContainer>
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
                                <Input
                                    placeholder="Enter Your Email"
                                />
                                <Button
                                    button__textLink="Get Stated"
                                    startedButton
                                />
                            </StyledHeaderInfosContainer>
                        </StyledHeaderDesktopContainer>

                       
                        



                        
                        
            </HeaderContainer>

            
            
        
    )
}

export default Header;