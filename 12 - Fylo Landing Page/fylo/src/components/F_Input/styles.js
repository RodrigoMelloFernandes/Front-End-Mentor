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
    @media screen and (min-width: 1440px){
        width: 65%;
        padding: 2.5%;
        margin-bottom: 0%;
    }
    
`

export const StyledInputSign = styled(StyledInput)`
    width: 80%;
    

`

// Como o inputsign está herdando caracteristicas do outro input é só alterar o que foi herdado como o  height 3vh voltar para o height que eu preciso ele não vai quebrar dai !!!