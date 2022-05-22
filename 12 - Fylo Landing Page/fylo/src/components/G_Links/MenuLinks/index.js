import {StyledMenuLinks} from './styles'

function MenuLinks (props) {
    return(
        <StyledMenuLinks
            href="#" textLink={props.textLink}
        >{props.textLink}
        </StyledMenuLinks>
    )
}

export default MenuLinks;