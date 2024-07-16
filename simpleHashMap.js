class SimpleHashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

const hashMap = new SimpleHashMap();
hashMap.put('a', 1);
console.log(hashMap.get('a'));  // Output: 1
hashMap.remove('a');
console.log(hashMap.get('a'));  // Output: undefined
