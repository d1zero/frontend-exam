/* eslint-disable no-console */
import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';

const ApartCard = ({ data }) => {
    console.log(data);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://demo-api.vsdev.space/storage/brom/home_img.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ApartCard;
