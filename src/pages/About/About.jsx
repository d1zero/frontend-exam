/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import instance from '../../API';

const AboutPage = () => {
    const [info, setInfo] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        instance.get('/api/brom/about_page').then((res) => {
            if (res.status === 200) {
                setInfo(res.data);
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return <div dangerouslySetInnerHTML={{ __html: info.text }} />;
};

export default AboutPage;
