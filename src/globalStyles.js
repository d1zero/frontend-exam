import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const CustomLink = styled(Link)`
    color: #1976d2 !important;
    padding-right: 20px;
    text-decoration: none !important;
    &:hover: {
        color: '#1976d2';
        text-decoration: none;
    }
    &:visited: {
        color: '#1976d2';
        text-decoration: none;
    }
`;

export const GlobalStyle = createGlobalStyle`
    html {
        overflow-y: scroll;
    }
`;
