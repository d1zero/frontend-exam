/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Loader from '../../components/Loader/Loader';
import { getAdverts } from '../../fetchData';
import CarCard from '../../components/CarCard/CarCard';
import ApartCard from '../../components/ApartCard/ApartCard';
import Form from '../../components/Form/Form';

const AdvertsPage = () => {
    const [adverts, setAdverts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAdverts(setAdverts, setLoading);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Form
                setAdvertsLoading={setLoading}
                setAdverts={setAdverts}
                advertsLoading={loading}
            />
            <Grid container spacing={2} style={{ marginTop: 10 }}>
                {adverts.map((advert) => {
                    return advert.type === 'car' ? (
                        <Grid item xs={4} key={advert.id}>
                            <CarCard key={advert.id} data={advert} />
                        </Grid>
                    ) : advert.type === 'apartment' ? (
                        <Grid item xs={4} key={advert.id}>
                            <ApartCard key={advert.id} data={advert} />
                        </Grid>
                    ) : (
                        <div key={advert.id}>asdasd</div>
                    );
                })}
            </Grid>
        </div>
    );
};

export default AdvertsPage;
