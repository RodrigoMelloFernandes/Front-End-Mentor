import {FaInstagram} from 'react-icons/fa'
import {StyledInstagram, StyledSocialMedia} from './styles'

function InstagramIcon () {
    return(
            <>
                <StyledSocialMedia>
                    <StyledInstagram>
                        <FaInstagram/>
                    </StyledInstagram>
                </StyledSocialMedia>
            </>
    )
}

export default InstagramIcon;