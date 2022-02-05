/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import instance from '../../API';
import CarCard from '../../components/CarCard/CarCard';
import ApartCard from '../../components/ApartCard/ApartCard';

const AdvertsPage = () => {
    const [adverts, setAdverts] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        instance.get('/api/brom/sales').then((res) => {
            setAdverts(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            {adverts.map((advert) => {
                return advert.type === 'car' ? (
                    <CarCard key={advert.id} data={advert} />
                ) : advert.type === 'apartment' ? (
                    <ApartCard key={advert.id} data={advert} />
                ) : (
                    <div>asdasd</div>
                );
            })}
        </div>
    );
};

export default AdvertsPage;
