import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
    color: #fff !important;
    padding-right: 20px;
    text-decoration: none !important;
    margin-left: 10px;
    &:hover: {
        color: '#fff';
        text-decoration: none;
    }
    &:visited: {
        color: '#fff';
        text-decoration: none;
    }
`;

export default NavLink;
