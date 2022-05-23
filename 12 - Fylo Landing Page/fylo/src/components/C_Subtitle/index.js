import {StyledsubtitleHeader,StyledsubtitleTestemonial,StyledsubtitleTestemonialCard,StyledsubtitleSignUp,StyledsubtitleFooter} from './styles'

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

    else if (props.subtitleFooter){
        return <StyledsubtitleFooter content={props.content}>{props.content}</StyledsubtitleFooter>
    }
}

export default Subtitle;