const typeorm = require('typeorm');

module.exports = new typeorm.DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nimamleo',
  password: 'root',
  database: 'text_seacrh',
  entities: ['dist/src/entities/**.entity{.ts,.js}'],
  migrations: ['dist/**.migration{.ts,.js}'],
  synchronize: false,
  verboseRetryLog: true,
  autoLoadEntities: true,
  logging: true,
});
