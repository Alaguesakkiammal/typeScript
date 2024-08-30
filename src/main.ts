import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './datasource'; // Import your data source
import { user } from './user'; // Import your User entity
import PORT from './server'; // Import your PORT configuration

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Initialize TypeORM data source
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    // Get the repository for User entity
    const userRepository = AppDataSource.getRepository(user);

    // Define your routes
    app.get('/api/v1/demo/get', async (req, res) => {
      try {
        console.log('Received request to /api/v1/demo/get');
        const users = await userRepository.find({
          order :{
            id:'ASC'
          }
        }); // Fetch all users
        console.log('All users:', users);
        res.json(users); // Send users as JSON response
      } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Error fetching users');
      }
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  });
