import React from 'react';
import GlobalStyles from './component/GlobalStyles/GlobalStyles'
import Header from './component/Header';
import styled from 'styled-components';

const App = () => {
    console.log('App',Header);
    return (
        <div>
            <MaxWidthWrapper>
                <Header title="To Do Application" subTitle="Create To Do Application" />      
                <br></br>          
                <br></br>          
                <br></br>          
            </MaxWidthWrapper>
            <GlobalStyles />
        </div>
    )
};

const MaxWidthWrapper = styled.div`
    background-color: var(--color-primary);
    position: relative;
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 6px;
`;

export default App;