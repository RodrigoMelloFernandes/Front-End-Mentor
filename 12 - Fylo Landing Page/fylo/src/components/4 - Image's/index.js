function Img (props) {
    if(props.fyloLogo){
        return <fyloLogo src={props.src} alt={props.alt}/>
    }
    
    else if (props.headerImg){
        return <headerImg src={props.src} alt={props.alt}/>
    }

    else if (props.testemonialImg){
        return <testemonialImg src={props.src} alt={props.alt}/>
    }

    else if (props.signKyleImg){
        return <signKyleImg src={props.src} alt={props.alt}/>
    }

    else if(props.iconPhone){
        return <iconPhone src={props.src} alt={props.alt}/>
    }

    else if (props.iconEmail){
        return <iconEmail src={props.src} alt={props.alt}/>
    }
}

export default Img;