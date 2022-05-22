import { GlobalStyle } from './components/GlobalStyles';

import Header from './Page/A_Header';
import Title from './components/B_Title';





function App() {
    return (
        <>
            <GlobalStyle />
                <Header/>
                <Title title="TitleHeader" titleHeader/>
                <Title title="TitleHeader" titleTestemonial/>
                <Title title="TitleHeader" titleSignUp/>
                   

        </>
    );
}

export default App;
