import { DataSource } from 'typeorm';
import { user } from './user';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Alagu',
  database: 'postgres',
  entities: [user],
  synchronize: true, // Automatically create database schema
});





