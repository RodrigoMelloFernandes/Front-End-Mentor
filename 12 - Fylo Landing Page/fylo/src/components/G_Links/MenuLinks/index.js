import {StyledMenuLinks} from './styles'

function MenuLinks (props) {
    return(
        <StyledMenuLinks href="#">{props.textLink}</StyledMenuLinks>
    )
}

export default MenuLinks;