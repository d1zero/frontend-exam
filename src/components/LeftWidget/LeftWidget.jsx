import { Typography } from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react-lite';
import DatabaseData from '../../store/DatabaseData';

const LeftWidget = observer(() => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography>Количество объявлений в базе brom.ru:</Typography>
            <Typography>автомобили: {DatabaseData.cars}</Typography>
            <Typography>квартиры: {DatabaseData.apartments}</Typography>
        </div>
    );
});

export default LeftWidget;
