import {StyledfyloLogo , StyledheaderImg, StyledtestemonialImg, StylediconArrow, StylediconQuotes, StyledsignKyleImg, StylediconPhone, StylediconEmail, StyledCurveMobile, StyledCurveDesktop,StyledfyloLogoFooter} from './styles'


function Img (props) {
    if(props.fyloLogoImg){
        return <StyledfyloLogo src={props.src} alt={props.alt}/>
    }

    if(props.fyloLogoImgFooter){
        return <StyledfyloLogoFooter src={props.src} alt={props.alt}/>
    }


    else if (props.headerImg){
        return <StyledheaderImg src={props.src} alt={props.alt}/>
    }

    else if (props.testemonialImg){
        return <StyledtestemonialImg src={props.src} alt={props.alt}/>
    }

    else if (props.iconArrow){
        return <StylediconArrow src={props.src} alt={props.alt}/>
    }

    else if (props.iconQuotes){
        return <StylediconQuotes src={props.src} alt={props.alt}/>
    }

    else if (props.signKyleImg){
        return <StyledsignKyleImg src={props.src} alt={props.alt}/>
    }

    else if(props.iconPhone){
        return <StylediconPhone src={props.src} alt={props.alt}/>
    }

    else if (props.iconEmail){
        return <StylediconEmail src={props.src} alt={props.alt}/>
    }

    else if (props.curveDesktop){
        return <StyledCurveDesktop src={props.src} alt={props.alt}/>
    }

    else if (props.curveMobile){
        return <StyledCurveMobile src={props.src} alt={props.alt}/>
    }

    

}

export default Img;