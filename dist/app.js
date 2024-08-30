"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const datasource_1 = require("./datasource"); // Import your data source
const user_1 = require("./user"); // Import your User entity
const server_1 = __importDefault(require("./server")); // Import your PORT configuration
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON bodies
// Initialize TypeORM data source
datasource_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
    // Get the repository for User entity
    const userRepository = datasource_1.AppDataSource.getRepository(user_1.user);
    // Define your routes
    app.get('/api/v1/demo/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('Received request to /api/v1/demo/get');
            const users = yield userRepository.find({
                order: {
                    id: 'ASC'
                }
            }); // Fetch all users
            console.log('All users:', users);
            res.json(users); // Send users as JSON response
        }
        catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        }
    }));
    app.listen(server_1.default, () => {
        console.log(`Server is running on port ${server_1.default}`);
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization:', error);
});
