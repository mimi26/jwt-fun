module.exports = {
    port: 3000,
    dbConnectionString: 'postgresql://localhost/jwt_db',
    saltRounds: 2,
    jwtSecret: 'yo-its-a-secret',
    tokenExpireTime: '6h',
    dialect: 'postgres'
}