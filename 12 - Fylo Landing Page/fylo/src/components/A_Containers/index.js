import {StyledMenuNavContainer,StyledHeaderInfosContainer,StyledHeaderDesktopContainer,StyledTestemonialCard,StyledTestemonialDesktopContainer} from './styles'

function Container (props) {
    if(props.MenuNavContainer) {
        return <StyledMenuNavContainer></StyledMenuNavContainer> 
    }

    else if (props.HeaderInfosContainer) {
        return <StyledHeaderInfosContainer></StyledHeaderInfosContainer>
    }

    else if (props.headerDesktopContainer) {
        return <StyledHeaderDesktopContainer></StyledHeaderDesktopContainer>
    }

    else if (props.TestemonialCard) {
        return <StyledTestemonialCard></StyledTestemonialCard>
    }

    else if (props.TestemonialDesktopContainer) {
        return <StyledTestemonialDesktopContainer>{props.children}</StyledTestemonialDesktopContainer>
    }
}

export default Container;