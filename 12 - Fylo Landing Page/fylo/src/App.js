import { GlobalStyle } from './components/GlobalStyles';

import Header from './Page/A_Header';
import TestemonialSection from './Page/B_TestemonialSection'
import SignUpSection from './Page/C_SignUpSection';
import Footer from './Page/D_Footer';


function App() {
    return (
        <>
            <GlobalStyle />
                <Header/>  
                <TestemonialSection/>
                <SignUpSection/>  
                <Footer/>        
        </>
    );
}

export default App;
