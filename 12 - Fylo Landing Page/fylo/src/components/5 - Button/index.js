function Button (props) {
    if(props.startedButton){
        return <startedButton textLink={props.button__textLink}>            
                    <startedLink href="#">{props.button__textLink}
                    </startedLink>
                </startedButton>
    }
}

export default Button;