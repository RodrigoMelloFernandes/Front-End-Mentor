import {StyledFooterLinks} from './styles'

function FooterLinks (props) {
    return(
        <StyledFooterLinks 
            href="#" 
            textLink={props.textLink}>
            {props.textLink}
        </StyledFooterLinks>
    )
}

export default FooterLinks;