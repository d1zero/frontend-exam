import { makeAutoObservable } from 'mobx';

class DatabaseData {
    cars = 0;

    apartments = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setCars(amount) {
        this.cars = amount;
    }

    setApartments(amount) {
        this.apartments = amount;
    }
}

export default new DatabaseData();
