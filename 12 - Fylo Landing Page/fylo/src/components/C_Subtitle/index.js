import {StyledsubtitleHeader,StyledsubtitleTestemonial,StyledsubtitleTestemonialCard,StyledsubtitleSignUp} from './styles'

function Subtitle (props) {
    if(props.subtitleHeader){
        return <StyledsubtitleHeader content={props.content}>{props.content}</StyledsubtitleHeader>
    }

    else if (props.subtitleTestemonial){
        return <StyledsubtitleTestemonial content={props.content}>{props.content}</StyledsubtitleTestemonial>
    }

    else if (props.subtitleTestemonialCard){
        return <StyledsubtitleTestemonialCard content={props.content}>{props.content}</StyledsubtitleTestemonialCard>
    }

    else if (props.subtitleSignUp){
        return <StyledsubtitleSignUp content={props.content}>{props.content}</StyledsubtitleSignUp>
    }
}

export default Subtitle;