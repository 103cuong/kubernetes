const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 9000,
  pgHost: process.env.PG_HOST || '127.0.0.1',
  pgPort: process.env.PG_PORT || 5432,
  pgDB: process.env.PG_DB || 'postgres',
  pgUser: process.env.PG_USER || 'postgres',
  pgPassword: process.env.PG_PASSWORD || 'evd7(BdfYkit!*C',
  jwt: {
    secretKey: process.env.SECRET_KEY || '0{!2=<&[39d9/`M',
    algorithm: process.env.ALGORITHM || 'HS256',
    expiresIn: process.env.EXPIRES_IN || '30m',
  },
};

export default config;
