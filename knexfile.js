module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'H38PEJRSMp',
      database: 'barriga',
    },
    migrations: {
      directory: 'src/migrations',
    },

  },
};
