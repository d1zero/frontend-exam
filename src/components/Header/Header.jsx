import React, { useEffect } from 'react';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import MyContainer from './headerStyles';
import logo from '../../logo.svg';
import instance from '../../API';
import DatabaseData from '../../store/DatabaseData';

const Header = () => {
    useEffect(() => {
        instance.get('/api/brom/left_widget').then((res) => {
            if (res.status === 200) {
                const { cars, apartments } = res.data;
                DatabaseData.setCars(cars);
                DatabaseData.setApartments(apartments);
            }
        });
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
