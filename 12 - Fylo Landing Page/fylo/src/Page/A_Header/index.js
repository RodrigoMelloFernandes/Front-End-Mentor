import {HeaderContainer} from "./styles";

import Img from '../../components/D_Images'
import Nav from '../../components/L_Nav'
import Title from '../../components/B_Title'
import Subtitle from "../../components/C_Subtitle";
import Input from '../../components/F_Input'
import Button from "../../components/E_Button";

import fyloLogoImg from '../../images/logo.svg'
import headerImg from '../../images/illustration-1.svg'



function Header (props) {
    return (
            <HeaderContainer>
                        <Img 
                            src={fyloLogoImg} alt="Logo" 
                            fyloLogoImg
                        />
                        <Nav/>

                        <Img 
                            src={headerImg} alt="headerImg" 
                            headerImg
                        />

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


                        
                        
            </HeaderContainer>

            
            
        
    )
}

export default Header;