import {StyledTestemonialLinks} from './styles'

function TestemonialLinks (props) {
    return (
        <StyledTestemonialLinks 
            href="#" 
            textLink={props.textLink}>
            {props.textLink}
        </StyledTestemonialLinks>
    )
}

export default TestemonialLinks;