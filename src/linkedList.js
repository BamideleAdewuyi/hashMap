import Node from "./nodes.js"

class LinkedList {
    constructor() {
        this.list = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.list === null) {
            this.list = newNode;
            return;
        }
        
        let last = this.list;
        while (last.nextNode != null) {
            last = last.nextNode;
        };
        
        last.nextNode = newNode;
        return;
    };

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.list;
        this.list = newNode;
        return;
    };

    size() {
        if (this.list === null) {
            return 0;
        }

        let total = 1;
        let last = this.list;

        while (last.nextNode != null) {
            total++;
            last = last.nextNode;
        }

        return total;
    };

    head() {
        return this.list;
    };

    tail() {
        if (this.list === null) {
            return null;
        }

        let last = this.list;

        while (last.nextNode != null) {
            last = last.nextNode;
        }

        return last;
    };

    at(index) {
        if (this.list === null || index >= this.size()) {
            return null;
        };

        let selected = this.list;
        let count = 0;

        while (count != index) {
            count++;
            selected = selected.nextNode;
        }

        return selected;
    };

    pop() {
        if (this.list === null) {
            return;
        };
        
        if (this.size() === 1) {
            this.list = null;
            return;
        };
        
        this.at(this.size() - 2).nextNode = null;
    };

    contains(value) {
        if (this.list === null) {
            return false;
        }
        
        let last = this.list;
        let result = false;

        while (last != null) {
            if (last.value === value) {
                result = true;
                return result
            }
            last = last.nextNode;
        }

        return result;
    };

    find(value) {
        if (!this.contains(value)) {
            return null;
        }

        let index = 0;
        let last = this.list;

        while (last.value != value) {
            index++;
            last = last.nextNode;
        }

        return index;
    }

    toString() {
        if (this.list === null) {
            return null;
        }

        let values = [];

        let last = this.list;

        while (last != null) {
            values.push(`( ${last.value} )`);
            last = last.nextNode;
        }

        values.push(`( ${null} )`);

        return values.join(" -> ")
    };

    insertAt(value, index) {
        const newNode = new Node(value);

        if (this.list === null) {
            this.list = newNode;
            return;
        };

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index > this.size() - 1) {
            this.append(value);
            return;
        }

        const oldNode = this.at(index)

        const breakNode = this.at(index - 1)

        newNode.nextNode = oldNode;

        breakNode.nextNode = newNode;
    };

    removeAt(index) {
        if (this.list === null) {
            return;
        };

        if (index > this.size() - 1) {
            return;
        };

        if (index === 0) {
            this.list = this.at(1);
            return;
        }

        let preIndexNode = this.at(index - 1);
        let postIndexNode = this.at(index + 1);

        preIndexNode.nextNode = postIndexNode;
        return;
    };
}

export default LinkedList;