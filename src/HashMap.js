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
                nextNode: undefined
            };
            if (this.checkLoadFactor()) {
                this.rehash()
            }
            return;
        };

        for (const bucket of this.capacity) {
            let last = bucket;
            while (last != null || last != undefined) {
                if (last.key === key) {
                    last.value = value;
                    return;
                }
                last = last.nextNode;
            }
        }

        let last = this.capacity[hashCode];
        while (last.nextNode != null) {
            last = last.nextNode
        };
        last.nextNode = {key: key, value: value, nextNode: undefined};

        if (this.checkLoadFactor()) {
            this.rehash();
        }

    };

    get(key) {
        for (const bucket of this.capacity) {
            let last = bucket;
            while (last != null || last != undefined) {
                if (last.key === key) {
                    return last.value;
                }
                last = last.nextNode;
            }
        }
        return null;
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
        const index = this.hash(key);
        let current = this.capacity[index];
        let prev = null;

        while (current) {
            console.log(current.key)
            if (current.key === key) {
            if (prev === null) {
                this.capacity[index] = current.nextNode;
            } else {
                prev.nextNode = current.nextNode;
            }
            return true;
            }
            prev = current;
            current = current.nextNode;
        }

        return false;
    }

    length() {
        let total = 0;
        for (const bucket of this.capacity) {
            if (bucket != undefined) {
                let last = bucket;
                while (last != undefined) {
                    total += 1;
                    last = last.nextNode
                }
            }
        }
        return total;
    };

    clear() {
        this.capacity = new Array(16);
    };

    keys() {
        let allKeys = [];
        for (const bucket of this.capacity) {
            if (bucket != undefined) {
                let last = bucket;
                while (last != undefined) {
                    allKeys.push(last.key)
                    last = last.nextNode;
                }
            }
        }

        return allKeys;
    };

    values() {
        let allValues = [];
        for (const bucket of this.capacity) {
            if (bucket != undefined) {
                let last = bucket;
                while (last != undefined) {
                    allValues.push(last.value)
                    last = last.nextNode;
                }
            }
        }

        return allValues;
    };

    entries() {
        let allEntries = [];
        for (const bucket of this.capacity) {
            if (bucket != undefined) {
                let last = bucket;
                while (last != undefined) {
                    allEntries.push([last.key, last.value])
                    last = last.nextNode;
                }
            }
        }
        return allEntries;
    };

    checkLoadFactor() {
        return this.length() > (this.capacity.length * this.loadFactor);
    };

    rehash() {
        const newCap = this.capacity.length * 2;
        const newMap = new Array(newCap);
        const entries = this.entries();
        this.capacity = newMap;

        for (const pair of entries) {
            this.set(pair[0], pair[1])
        };

        return;
    }
}

export default HashMap;