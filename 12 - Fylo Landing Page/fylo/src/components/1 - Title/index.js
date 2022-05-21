function Title (props) {
    if(props.titleHeader){
        return <titleHeader title={props.title}>{props.title}</titleHeader>
    }

    else if (props.titleTestemonial){
        return <titleTestemonial title={props.title}>{props.title}</titleTestemonial>
    }

    else if (props.titleSignUp){
        return <titleSignUp title={props.title}>{props.title}</titleSignUp>
    }
}

export default Title;