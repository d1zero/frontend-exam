import React from 'react';
import { Typography } from '@mui/material';
import { CustomLink } from '../../globalStyles';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img
                src="https://demo-api.vsdev.space/storage/brom/left_widget_img.jpg"
                alt="apartment"
            />
            <CustomLink to="/">
                <Typography variant="h6">Главная</Typography>
            </CustomLink>
            <CustomLink to="/adverts">
                <Typography variant="h6">Объявления</Typography>
            </CustomLink>
            <CustomLink to="/about">
                <Typography variant="h6">О нас</Typography>
            </CustomLink>
        </div>
    );
};

export default Navbar;
