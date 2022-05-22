import {StyledstartedButton, StyledstartedLink} from './styles'

function Button (props) {
    if(props.startedButton){
        return <StyledstartedButton textLink={props.button__textLink}>            
                    <StyledstartedLink href="#">{props.button__textLink}
                    </StyledstartedLink>
                </StyledstartedButton>
    }
}

export default Button;