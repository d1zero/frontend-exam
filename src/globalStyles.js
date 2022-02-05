import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
    color: #1976d2 !important;
    padding-right: 20px;
    text-decoration: none !important;
    margin-left: 10px;
    &:hover: {
        color: '#1976d2';
        text-decoration: none;
    }
    &:visited: {
        color: '#1976d2';
        text-decoration: none;
    }
`;

export default CustomLink;
