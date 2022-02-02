import { makeAutoObservable } from 'mobx';

class Smth {
    smth = [];

    constructor() {
        makeAutoObservable(this);
    }

    setSmth(newArr) {
        this.smth = newArr;
    }
}

export default new Smth();
