let id = 0;

module.exports = {
    startAt(val) {
        id = val;
    },
    get() {
        return id;
    },
    new(type) {
        if (typeof id === 'number') {
            id += 1;
        } else {
            id = parseInt(id, 10) + 1;
        }

        if (type === 's') {
            id = id.toString();
        }

        return id;
    },
};
