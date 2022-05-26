import {
    StyledMenuNavContainer,StyledHeaderInfosContainer,StyledHeaderDesktopContainer,StyledTestemonialCard,StyledTestemonialDesktopContainer, StyledSignUpDesktop,StyledFooterDesktop, StyledNavContainer,StyledTestemonialLinksContainer,StyledTestemonialLinksContainerBox,StyledTestemonialCardInsideContainer,StyledTestemonialCardInsideContainerBox,
    StyledSignUpDesktopBox,StyledfooterInsideInfoContainer,StyledfooterInsideLinksContainer,
    StyledfooterSocialMediaContainer

} from './styles'

function Container (props) {
    if(props.MenuNavContainer) {
        return <StyledMenuNavContainer>
            {props.children}
        </StyledMenuNavContainer> 
    }

    else if (props.NavContainer) {
        return <StyledNavContainer>
            {props.children}
        </StyledNavContainer>
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

    else if (props.TestemonialLinksContainer) {
        return <StyledTestemonialLinksContainer>{props.children}</StyledTestemonialLinksContainer>
    }

    else if (props.TestemonialLinksContainerBox) {
        return <StyledTestemonialLinksContainerBox>{props.children}</StyledTestemonialLinksContainerBox>
    }

    else if (props.TestemonialCard) {
        return <StyledTestemonialCard>
            {props.children}
        </StyledTestemonialCard>
    }

    else if (props.TestemonialCardInsideContainer) {
        return <StyledTestemonialCardInsideContainer>
            {props.children}
        </StyledTestemonialCardInsideContainer>
    }

    else if (props.TestemonialCardInsideContainerBox) {
        return <StyledTestemonialCardInsideContainerBox>
            {props.children}
        </StyledTestemonialCardInsideContainerBox>
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

    else if (props.SignUpDesktopBox) {
        return <StyledSignUpDesktopBox>
            {props.children}
        </StyledSignUpDesktopBox>
    }

    else if(props.footerDesktop) {
        return <StyledFooterDesktop>
            {props.children}
        </StyledFooterDesktop>
    }

    else if(props.footerInsideInfoContainer) {
        return <StyledfooterInsideInfoContainer>
            {props.children}
        </StyledfooterInsideInfoContainer>
    }

    else if (props.footerInsideLinksContainer) {
        return <StyledfooterInsideLinksContainer>{props.children}</StyledfooterInsideLinksContainer>
    }

    else if (props.footerSocialMediaContainer) {
        return <StyledfooterSocialMediaContainer>{props.children}</StyledfooterSocialMediaContainer>
    }


}

export default Container;

