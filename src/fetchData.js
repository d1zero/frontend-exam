import instance from './API';
import DatabaseData from './store/DatabaseData';

export const getAdverts = (setAdverts, setLoading) => {
    setLoading(true);
    instance.get('/api/brom/sales').then((res) => {
        setAdverts(res.data);
        setLoading(false);
    });
};

export const getWidgetData = () => {
    instance.get('/api/brom/left_widget').then((res) => {
        if (res.status === 200) {
            const { cars, apartments } = res.data;
            DatabaseData.setCars(cars);
            DatabaseData.setApartments(apartments);
        }
    });
};
