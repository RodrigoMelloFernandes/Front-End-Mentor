import {StyledMenuNavContainer,StyledHeaderInfosContainer,StyledHeaderDesktopContainer,StyledTestemonialCard} from './styles'

function Container (props) {
    if(props.MenuNavContainer) {
        return <StyledMenuNavContainer/> 
    }

    else if (props.HeaderInfosContainer) {
        return <StyledHeaderInfosContainer/>
    }

    else if (props.headerDesktopContainer) {
        return <StyledHeaderDesktopContainer/>
    }

    else if (props.TestemonialCard) {
        return <StyledTestemonialCard/>
    }

    




}

export default Container;