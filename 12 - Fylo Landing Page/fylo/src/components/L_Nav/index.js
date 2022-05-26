import {StyledNav} from './styles';
import {StyledUl} from '../H_Ul/styles'
import {StyledLi} from '../I_Li/styles'
import MenuLinks from '../G_Links/MenuLinks';
import Container from '../A_Containers';


function Nav (props) {
    return (
        <Container NavContainer>
            <StyledNav>
                <StyledUl>
                    <StyledLi>
                        <MenuLinks textLink="Features"/>
                        <MenuLinks textLink="Team"/>
                        <MenuLinks textLink="Sign In"/>
                    </StyledLi>
                </StyledUl>
            </StyledNav>
        </Container>
    )
}

export default Nav;