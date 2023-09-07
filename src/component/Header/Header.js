import React from 'react';
import styled from 'styled-components';

const Header = ({title, subTitle}) => (    
    <Wrapper>  
        <Title>{title}</Title> 
        <SubTitle>{subTitle}</SubTitle>
    </Wrapper>  
);

 const Wrapper = styled.div`
    display: block;
    text-align: center;
    margin-bottom: 1rem;
`;

 const Title = styled.h1`
    color: var(--color-secondary);
    font-weight: var(--font-weight-bold);
    font-size: var(--heading-size-h1);
 `;

 const SubTitle = styled.h4`
 color: var(--color-tertiary);
 font-weight: var(--font-weight-medium);
 font-size: var(--heading-size-h4);
`;

export default Header;

