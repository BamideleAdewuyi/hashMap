import LinkedList from "./linkedList.js";

class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = new Array(16);
    };

    hash(key) {
        let hashCode = 0;

        const primeNumber = 19;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16
        }

        return hashCode;
    };

    set(key, value) {

    };

    get(key) {

    };

    has(key) {

    };

    remove(key) {

    };

    length() {

    };

    clear() {

    };

    keys() {

    };

    values() {

    };

    entries() {

    };
}

export default HashMap;