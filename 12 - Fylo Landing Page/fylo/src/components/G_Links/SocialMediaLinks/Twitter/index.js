import {FaTwitter} from 'react-icons/fa'
import {StyledTwitter, StyledSocialMedia} from './styles'

function TwitterIcon () {
    return(
            <>
                <StyledSocialMedia>
                    <StyledTwitter>
                        <FaTwitter/>
                    </StyledTwitter>
                </StyledSocialMedia>
            </>
    )
}

export default TwitterIcon;