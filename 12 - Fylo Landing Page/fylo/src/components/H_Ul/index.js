import {StyledUl} from './styles'
import {StyledLi} from '../I_Li/styles'
import MenuLinks, {StyledMenuLinks} from '../G_Links/MenuLinks'

function Ul (props) {
    return (
        <StyledUl>
            <StyledLi>
                <MenuLinks textLink="Foi"/>
                <MenuLinks textLink="Foi"/>
                <MenuLinks textLink="Foi"/>
            </StyledLi>
            
        </StyledUl>
    )
}

export default Ul;