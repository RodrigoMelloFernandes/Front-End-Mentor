import styled from "styled-components"
import { black } from "../Z_Ui/Variables"

export const StyledInput = styled.input`
    width: 100%;
    height: 6vh;
    font-family: 'Raleway', sans-serif;
    padding: 5%;
    border-radius: 3px;
    border: 1px solid ${black};
    margin-bottom: 2.5%;
    
`

export const StyledInputSign = styled(StyledInput)`
    width: 80%;
`