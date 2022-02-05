/* eslint-disable no-unreachable-loop */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Box, Button, Collapse } from '@mui/material';
import Loader from '../Loader/Loader';
import { getAdverts, getWidgetData } from '../../fetchData';
import instance from '../../API';

const TYPES = [
    {
        value: 'car',
        label: 'Машина',
    },
    {
        value: 'apartment',
        label: 'Квартира',
    },
];

const Form = ({ setAdverts, setAdvertsLoading }) => {
    const [type, setType] = useState('car');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const [model, setModel] = useState('');
    const [carType, setCarType] = useState('');
    const [volume, setVolume] = useState('');
    const [power, setPower] = useState('');

    const [rooms, setRooms] = useState('');
    const [square, setSquare] = useState('');

    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        instance.get('/api/brom/sales/form').then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    const submit = () => {
        const formData = new FormData();
        formData.append('type', type);
        formData.append('city', city);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('price', price);

        if (type === 'car') {
            formData.append('model', model);
            formData.append('car_type', carType);
            formData.append('engine_volume', volume);
            formData.append('engine_power', power);
        } else if (type === 'apartment') {
            formData.append('rooms', rooms);
            formData.append('square', square);
        }

        instance
            .post('/api/brom/sales', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(() => {
                getAdverts(setAdverts, setAdvertsLoading);
                getWidgetData();
            });
    };

    if (loading) {
        console.log(data);
        return <Loader />;
    }

    return (
        <div>
            <Button
                variant="contained"
                style={{ marginBottom: '10px' }}
                onClick={() => {
                    setOpenForm(!openForm);
                }}
            >
                Показать/скрыть форму
            </Button>
            <Collapse in={openForm}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Тип"
                        value={type}
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                        style={{ marginLeft: 0 }}
                    >
                        {TYPES.map((option) => {
                            return (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Адрес"
                        variant="outlined"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        style={{ marginLeft: 0 }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Телефон"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Цена"
                        variant="outlined"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                    <br />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Город"
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                        style={{ marginLeft: 0 }}
                    >
                        {data.fields.city.values.map((option) => {
                            return (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                    <br />
                    {type === 'car' ? (
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Марка"
                                variant="outlined"
                                value={model}
                                onChange={(e) => {
                                    setModel(e.target.value);
                                }}
                                style={{ marginLeft: 0 }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Объём двигателя"
                                variant="outlined"
                                value={volume}
                                onChange={(e) => {
                                    setVolume(e.target.value);
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Мощность двигателя"
                                variant="outlined"
                                value={power}
                                onChange={(e) => {
                                    setPower(e.target.value);
                                }}
                            />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Тип кузова"
                                value={carType}
                                onChange={(e) => {
                                    setCarType(e.target.value);
                                }}
                            >
                                {data.reference_fields[
                                    'type.car'
                                ].car_type.values.map((option) => {
                                    return (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    );
                                })}
                            </TextField>
                        </div>
                    ) : (
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Кол-во комнат"
                                variant="outlined"
                                value={rooms}
                                onChange={(e) => {
                                    setRooms(e.target.value);
                                }}
                                style={{ marginLeft: 0 }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Кол-во комнат"
                                variant="outlined"
                                value={square}
                                onChange={(e) => {
                                    setSquare(e.target.value);
                                }}
                            />
                        </div>
                    )}
                    <Button
                        variant="contained"
                        style={{ marginTop: '10px' }}
                        onClick={submit}
                    >
                        Добавить
                    </Button>
                </Box>
            </Collapse>
        </div>
    );
};

export default Form;
