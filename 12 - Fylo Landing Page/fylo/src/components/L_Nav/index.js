import {StyledNav} from './styles';
import {StyledUl} from '../H_Ul/styles'
import {StyledLi} from '../I_Li/styles'
import MenuLinks from '../G_Links/MenuLinks';


function Nav (props) {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <MenuLinks textLink="Features"/>
                    <MenuLinks textLink="Team"/>
                    <MenuLinks textLink="SignUp"/>
                </StyledLi>
            </StyledUl>
                   
        </StyledNav>
    )
}

export default Nav;