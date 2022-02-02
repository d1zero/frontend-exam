import React from 'react';
import { Typography } from '@mui/material';
import { footer as StyledFooter, NavLink } from './footerStyles';

const Footer = () => {
    return (
        <StyledFooter>
            <Typography variant="h6">
                Copyright © 2022&nbsp;
                <NavLink
                    href="https://t.me/d1z3ro"
                    rel="noreferrer"
                    target="_blank"
                >
                    d1zero
                </NavLink>
            </Typography>
        </StyledFooter>
    );
};

export default Footer;
