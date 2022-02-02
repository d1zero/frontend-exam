import styled from 'styled-components';

export const footer = styled.footer`
    background-color: #1976d2;
    width: 100%;
    color: #fff;
    height: 64px;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NavLink = styled.a`
    color: #ff7961;
    textDecoration: none;
    &:hover: {
        color: #ff7961;
        textDecoration: none;
    },
    &:visited: {
        color: #ff7961;
    },
`;
