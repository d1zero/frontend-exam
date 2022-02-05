import React, { useEffect } from 'react';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import MyContainer from './headerStyles';
import logo from '../../logo.svg';
import { getWidgetData } from '../../fetchData';

const Header = () => {
    useEffect(() => {
        getWidgetData();
    }, []);

    return (
        <AppBar position="static">
            <Container
                fixed
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '6px auto',
                }}
            >
                <Toolbar disableGutters>
                    <img src={logo} alt="logo" height="64px" width="64px" />
                </Toolbar>
                <MyContainer fixed>
                    <Typography variant="h3">Brom</Typography>
                </MyContainer>
            </Container>
        </AppBar>
    );
};

export default Header;
