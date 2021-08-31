import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
width: 100%;
height: 256px;

display: flex;
align-items: center;
padding: 16px;
box-sizing: border-box;
flex-direction: column;
`;

const TitleText = styled.span`
font-size: 56px;
font-weight: 200;
color: white;
letter-spacing: 4px;
`;

const DescText = styled.span`
font-size: 16px;
font-weight: 100;
color: white;
letter-spacing: 4px;
`;

const HeaderMenu = () => {
    return (
        <MenuWrapper>
            <TitleText>SIZE EXPLORATION</TitleText>
            <DescText>An interactive journey through different sizes, from humans to observable universe!</DescText>
        </MenuWrapper>
    )
}

export default HeaderMenu;