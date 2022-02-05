/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
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
            <div dangerouslySetInnerHTML={{ __html: info.text }} />
            <img src={info.image} alt="Картинка" />
        </div>
    );
};

export default MainPage;
