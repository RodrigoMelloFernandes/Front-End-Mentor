import { GlobalStyle } from './components/GlobalStyles';

import Header from './Page/A_Header';
import Nav from './components/L_Nav';
import Ul from './components/H_Ul';
import Li from './components/I_Li'
import MenuLinks from './components/G_Links/MenuLinks'






function App() {
    return (
        <>
            <GlobalStyle />
                <Header/>
                <Nav/>
                <Ul>a</Ul>   
                <Li>b</Li>
                <MenuLinks>c</MenuLinks>                

        </>
    );
}

export default App;
