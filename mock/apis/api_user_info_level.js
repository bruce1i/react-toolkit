module.exports = {
    // route: [
    //     {
    //         from: '/api/user/info/level',
    //         to: '/api_user_info_level',
    //     },
    //     {
    //         from: '/api/user/info/level*',
    //         to: '/api_user_info_level$1',
    //     },
    // ],
    db: [
        { id: 1, name: 'Bruce' },
        { id: 2, name: 'Tom' },
        { id: 3, name: 'Andy' },
    ],
    get({ data, db }) {
        console.log('> data', data);
        console.log('> db', db);

        return { data };
    },
    put() {
        return {
            code: 9,
            msg: 'not found',
            data: {
                id: 99,
            },
        };
    },
};
