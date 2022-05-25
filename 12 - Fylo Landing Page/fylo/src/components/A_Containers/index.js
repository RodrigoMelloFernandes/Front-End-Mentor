import {StyledMenuNavContainer,StyledHeaderInfosContainer,StyledHeaderDesktopContainer,StyledTestemonialCard,StyledTestemonialDesktopContainer, StyledSignUpDesktop,StyledFooterDesktop} from './styles'

function Container (props) {
    if(props.MenuNavContainer) {
        return <StyledMenuNavContainer>
            {props.children}
        </StyledMenuNavContainer> 
    }

    else if (props.HeaderInfosContainer) {
        return <StyledHeaderInfosContainer>
            {props.children}
        </StyledHeaderInfosContainer>
    }

    else if (props.headerDesktopContainer) {
        return <StyledHeaderDesktopContainer>
            {props.children}
        </StyledHeaderDesktopContainer>
    }

    else if (props.TestemonialCard) {
        return <StyledTestemonialCard>
            {props.children}
        </StyledTestemonialCard>
    }

    else if (props.TestemonialDesktopContainer) {
        return <StyledTestemonialDesktopContainer>{props.children}
        </StyledTestemonialDesktopContainer>
    }

    else if (props.SignUpDesktop) {
        return <StyledSignUpDesktop>
            {props.children}
        </StyledSignUpDesktop>
    }

    else if(props.footerDesktop) {
        return <StyledFooterDesktop>
            {props.children}
        </StyledFooterDesktop>
    }
}

export default Container;