class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = new Array(16);
    };

    hash(key) {
        let hashCode = 0;

        const primeNumber = 19;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity.length
        }

        return hashCode;
    };

    set(key, value) {
        const hashCode = this.hash(key);
        if (this.capacity[hashCode] === undefined) {
            this.capacity[hashCode] = {key: key,
                value: value,
                nextNode: null
            };
            return;
        }

    };

    get(key) {

    };

    has(key) {
        for (const bucket of this.capacity) {
            let last = bucket;
            while (last != null || last != undefined) {
                if (last.key === key) {
                    return true;
                }
                last = last.nextNode;
            }
        }
        return false;
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