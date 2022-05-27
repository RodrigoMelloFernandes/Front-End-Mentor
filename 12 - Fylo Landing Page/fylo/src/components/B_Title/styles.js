import styled from "styled-components"
import { white } from "../Z_Ui/Variables"

export const StyledtitleHeader = styled.h2`
    font-size: 1.53rem;
    line-height: 2.1rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5%;
    @media screen and (min-width: 1440px){
        text-align: start;
        font-size: 1.8rem;
        line-height: 2.5rem;
        width: 65%;
    }
    
`

export const StyledtitleTestemonial = styled(StyledtitleHeader)`
    font-size: 1rem;
    margin-bottom: 10%;
`

export const StyledtitleTestemonialCard = styled(StyledtitleHeader)`
    margin-bottom: 0;
    height: 4vh;
    font-size: .7rem;
`

export const StyledtitleSignUp = styled.h2`
    font-size: 1.43rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5%;
    color: ${white}
`