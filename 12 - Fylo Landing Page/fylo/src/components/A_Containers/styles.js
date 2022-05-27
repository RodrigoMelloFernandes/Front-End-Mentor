import styled from "styled-components"
import { white } from "../Z_Ui/Variables"

export const StyledContainer = styled.div`

`


export const StyledMenuNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20%;
    @media screen and (min-width: 1440px){
        width: 100%;
        margin-bottom: 5%;

    }
`

export const StyledNavContainer = styled.div`
    width: 62%;
    @media screen and (min-width: 1440px){
        width: 30%;
    }
    
`

export const StyledHeaderInfosContainer = styled.div`
    
`

export const StyledHeaderDesktopContainer = styled.div`
    
`

export const StyledTestemonialLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10%;

`

export const StyledTestemonialLinksContainerBox = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

export const StyledTestemonialCard = styled.div`
    background-color: ${white};
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,.15);
    border-radius: 5px;
    padding: 8% 10%;
`
export const StyledTestemonialCardInsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StyledTestemonialCardInsideContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 2.5%;
`

export const StyledTestemonialDesktopContainer = styled.div`
   
`

export const StyledSignUpDesktop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledSignUpDesktopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    
`

export const StyledFooterDesktop = styled.div`

`

export const StyledfooterInsideInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-bottom: 5%;
    &:last-child{
        margin-bottom: 20%;
    }
`

export const StyledfooterInsideLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
`

export const StyledfooterSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 39%;
    margin: 0 auto;  
`