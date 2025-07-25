// ./src/data/products.js

export const products = [
    {
        id: 1,
        name: 'Netflix',
        category: 'Streaming',
        plans: [
        {
            type: '1 Profile 1 User',
            prices: [
            { duration: '3 hari', price: 3000 },
            { duration: '7 hari', price: 7000 },
            { duration: '14 hari', price: 15000 },
            { duration: '20 hari', price: 22000 },
            { duration: '1 bulan', price: 28000 },
            { duration: '2 bulan', price: 55000 },
            { duration: '3 bulan', price: 83000 },
            ],
        },
        {
            type: '1 Profile 2 User',
            prices: [
            { duration: '3 hari', price: 5000 },
            { duration: '7 hari', price: 11000 },
            { duration: '14 hari', price: 14000 },
            { duration: '1 bulan', price: 22000 },
            { duration: '2 bulan', price: 37000 },
            { duration: '3 bulan', price: 49000 },
            ],
        },
        {
            type: 'Semi Private',
            prices: [
            { duration: '1 bulan', price: 39000 },
            { duration: '2 bulan', price: 58000 },
            { duration: '3 bulan', price: 97000 },
            ],
        },
        {
            type: 'Private',
            prices: [
                { duration: '1 hari', price: 13000 },
                { duration: '1 minggu', price: 54000 },
                { duration: '1 bulan', price: 159000 },
                { duration: '3 bulan', price: 449000 },
            ]
        }
        ],
    },
    {
        id: 2,
        name: 'IQIYI',
        category: 'Streaming',
        plans: [
        {
            type: 'Sharing',
            prices: [
            { duration: '1 hari', price: 2000 },
            { duration: '3 hari', price: 5000 },
            { duration: '7 hari', price: 9000 },
            { duration: '14 hari', price: 11000 },
            { duration: '20 hari', price: 13000 },
            { duration: '1 bulan', price: 15000 },
            { duration: '2 bulan', price: 19000 },
            { duration: '3 bulan', price: 24000 },
            { duration: '1 tahun', price: 42000 },
            ],
        },
        {
            type: 'Private',
            prices: [
            { duration: '1 bulan', price: 31000 },
            { duration: '3 bulan', price: 86000 },
            { duration: '1 tahun', price: 435000 },
            ],
        },
        ],
    },
    {
        id: 3,
        name: 'WeTV',
        category: 'Streaming',
        plans: [
        {
            type: 'Sharing',
            prices: [
            { duration: '1 hari', price: 2000 },
            { duration: '3 hari', price: 4000 },
            { duration: '7 hari', price: 7000 },
            { duration: '14 hari', price: 10000 },
            { duration: '20 hari', price: 12000 },
            { duration: '1 bulan', price: 14000 },
            { duration: '2 bulan', price: 17000 },
            { duration: '3 bulan', price: 24000 },
            { duration: '1 tahun', price: 65000 },
            ],
        },
        {
            type: 'Private',
            prices: [{ duration: '1 bulan', price: 33000 }],
        },
        ],
    },
    {
        id: 4,
        name: 'YouTube',
        category: 'Streaming',
        plans: [
        {
            type: 'Family Plan',
            prices: [
            { duration: '1 bulan', price: 7000 },
            { duration: '2 bulan', price: 13000 },
            { duration: '3 bulan', price: 19000 },
            { duration: '4 bulan', price: 24000 },
            { duration: '5 bulan', price: 29000 },
            { duration: '6 bulan', price: 34000 },
            ],
        },
        {
            type: 'Individu Plan',
            prices: [
            { duration: '1 bulan', price: 10000 },
            { duration: '2 bulan', price: 19000 },
            { duration: '3 bulan', price: 28000 },
            { duration: '4 bulan', price: 36000 },
            { duration: '5 bulan', price: 44000 },
            { duration: '6 bulan', price: 52000 },
            ],
        },
        ],
    },
    {
        id: 5,
        name: 'Viu',
        category: 'Streaming',
        plans: [
        {
            type: 'Sharing',
            prices: [
            { duration: '1 hari', price: 1500 },
            { duration: '7 hari', price: 4000 },
            { duration: '1 bulan', price: 12000 },
            { duration: '2 bulan', price: 17000 },
            { duration: '3 bulan', price: 21000 },
            { duration: '4 bulan', price: 26000 },
            { duration: '5 bulan', price: 30000 },
            { duration: '6 bulan', price: 35000 },
            { duration: '1 tahun', price: 40000 },
            ],
        },
        {
            type: 'Anti Limit',
            prices: [
            { duration: '1 bulan', price: 15000 },
            { duration: '2 bulan', price: 19000 },
            { duration: '3 bulan', price: 24000 },
            { duration: '4 bulan', price: 28000 },
            { duration: '6 bulan', price: 33000 },
            { duration: '1 tahun', price: 42000 },
            ],
        },
        ],
    },
    // You can add future products here, e.g.:
    // {
    //   id: 6,
    //   name: 'Mobile Legends',
    //   category: 'Game Top Up',
    //   plans: [...]
    // }
];

// Helper to format currency
export const formatCurrency = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};