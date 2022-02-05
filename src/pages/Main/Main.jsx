/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Loader from '../../components/Loader/Loader';
import instance from '../../API';

const MainPage = () => {
    const [info, setInfo] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instance.get('/api/brom/home_page').then((res) => {
            if (res.status === 200) {
                setInfo(res.data);
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Typography
                component="div"
                variant="body1"
                dangerouslySetInnerHTML={{ __html: info.text }}
            />
            <img src={info.image} alt="Картинка" height={500} />
        </div>
    );
};

export default MainPage;
