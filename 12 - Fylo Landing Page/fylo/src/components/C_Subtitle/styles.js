import styled from "styled-components"
import { white } from "../Z_Ui/Variables"

export const StyledsubtitleHeader = styled.p`
    font-size: .9rem;
    line-height: 1.3rem;
    text-align: center;
    margin-bottom: 10%;
    @media screen and (min-width: 1440px){
        margin-bottom: 2.5%;
        text-align: start;
        font-size: 1.2rem;
        line-height: 1.5rem;

    }
`


export const StyledsubtitleTestemonial = styled(StyledsubtitleHeader)`
    text-align: start;
    font-size: .82rem;
    margin-bottom: 5%;
`

export const StyledsubtitleTestemonialCard = styled(StyledsubtitleTestemonial)`
    font-size: .63rem;
`
export const StyledsubtitleSignUp = styled.p`
    text-align: center;
    line-height: 1.2rem;
    font-size: .91rem;
    margin-bottom: 10%;
    color: ${white}

`

export const StyledsubtitleFooter = styled.p`
    margin-left: 5%;
    color: ${white};
`