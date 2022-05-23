import {SignUpSectionContainer} from './styles'
import Title from '../../components/B_Title'
import Subtitle from "../../components/C_Subtitle";
import Input from '../../components/F_Input'
import Button from "../../components/E_Button";



function SignUpSection (props) {
    return (
        <SignUpSectionContainer>
            <Title 
                title="Get early access today" 
                titleSignUp
            />

            <Subtitle 
                content="It only takes a minute to sign up and our free starter tier is extremely generous. 
                If you have any questions, our support team would be happy to help you." 
                subtitleSignUp
            />

            <Input 
                placeholder="email@example.com"
            />

            <Button 
                button__textLink="Get Staterd For Free" 
                startedButton
            />


        </SignUpSectionContainer>
    )
}

export default SignUpSection;