import {StyledInput,StyledInputSign} from './styles'

function Input (props) {
    if (props.StyledInput) {
        return <StyledInput placeholder={props.placeholder}></StyledInput>
    }
    if (props.InputSign) {
        return <StyledInputSign placeholder={props.placeholder}></StyledInputSign>
    }

        
    
}

export default Input;

