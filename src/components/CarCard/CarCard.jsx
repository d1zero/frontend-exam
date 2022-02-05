/* eslint-disable no-console */
import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';

const CarCard = ({ data }) => {
    console.log(data);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://demo-api.vsdev.space/storage/brom/car_img.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.model} - {data.car_type}, {data.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.city}, {data.address}
                        <br />
                        {data.model}, {data.car_type}
                        <br />
                        Мощность двигателя, л.с.: {data.engine_power}
                        <br />
                        Объём двигателя: {data.engine_volume}
                        <br />
                        Номер телефона: {data.phone}
                        <br />
                        Цена: {data.price}
                        <br />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CarCard;
