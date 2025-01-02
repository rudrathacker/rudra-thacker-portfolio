module.exports = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        database: process.env.DB_NAME || 'rudra_thacker_portfolio',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || ''
    }
};