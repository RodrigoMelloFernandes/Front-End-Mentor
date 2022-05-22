function Subtitle (props) {
    if(props.subtitleHeader){
        return <subtitleHeader content={props.content}>{props.content}</subtitleHeader>
    }

    else if (props.subtitleTestemonial){
        return <subtitleTestemonial content={props.content}>{props.content}</subtitleTestemonial>
    }

    else if (props.subtitleTestemonialCard){
        return <subtitleTestemonial content={props.content}>{props.content}</subtitleTestemonial>
    }

    else if (props.subtitleSignUp){
        return <subtitleSignUp content={props.content}>{props.content}</subtitleSignUp>
    }
}

export default Subtitle;