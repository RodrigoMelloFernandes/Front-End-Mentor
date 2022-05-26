import {StyledtitleHeader, StyledtitleTestemonial, StyledtitleSignUp,StyledtitleTestemonialCard} from './styles'

function Title (props) {
    if(props.titleHeader){
        return <StyledtitleHeader title={props.title}>{props.title}</StyledtitleHeader>
    }

    else if (props.titleTestemonial){
        return <StyledtitleTestemonial title={props.title}>{props.title}</StyledtitleTestemonial>
    }

    else if (props.titleTestemonialCard){
        return <StyledtitleTestemonialCard title={props.title}>{props.title}</StyledtitleTestemonialCard>
    }

    else if (props.titleSignUp){
        return <StyledtitleSignUp title={props.title}>{props.title}</StyledtitleSignUp>
    }
}

export default Title;