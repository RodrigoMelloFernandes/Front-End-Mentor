import styled from "styled-components"
import { white, brightBlue } from "../Z_Ui/Variables"

export const StyledstartedButton = styled.button`
    width: 100%;
    height: 6vh;
    background-color: ${brightBlue};
    border-radius: 2.5px;
    margin-bottom: 20%;
    &:nth-child(2){
        width: 80%;
        
    }
`

export const StyledstartedLink = styled.a`
    text-decoration: none;
    color: ${white};
`