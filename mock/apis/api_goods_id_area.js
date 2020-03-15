module.exports = {
    route: [
        {
            from: '/api/goods',
            to: '/api_goods_id_area',
        },
        {
            from: '/api/goods/:goodId',
            to: '/api_goods_id_area/:goodId',
        },
    ],
    db: [
        {
            id: 1,
            area: 'Beijing',
        },
        {
            id: 2,
            area: 'Shanghai',
        },
        {
            id: 3,
            area: 'Wuhan',
            city: ['huangshi', 'shuizhou', 'shiyan'],
        },
        {
            id: 4,
            area: 'Guangzhou',
        },
    ],
    get({ data, db }) {
        console.log('> data', data);
        console.log('> db', db);

        return {
            data: {
                list: data,
                total: db.length,
                page: 2,
            },
        };
    },
};
