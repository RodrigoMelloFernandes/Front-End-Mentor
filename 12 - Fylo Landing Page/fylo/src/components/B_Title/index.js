import {StyledtitleHeader, StyledtitleTestemonial, StyledtitleSignUp} from './styles'

function Title (props) {
    if(props.titleHeader){
        return <StyledtitleHeader title={props.title}>{props.title}</StyledtitleHeader>
    }

    else if (props.titleTestemonial){
        return <StyledtitleTestemonial title={props.title}>{props.title}</StyledtitleTestemonial>
    }

    else if (props.titleTestemonialCard){
        return <StyledtitleTestemonial title={props.title}>{props.title}</StyledtitleTestemonial>
    }

    else if (props.titleSignUp){
        return <StyledtitleSignUp title={props.title}>{props.title}</StyledtitleSignUp>
    }
}

export default Title;