import express from 'express';
import dotenv from 'dotenv';
import {
  createUserController,
  getUserByIdController,
  getUserByParamController,
  listUsersController,
} from './scr/controllers/userController.js';
import {
  createBookController,
  getBookByIdController,
  listBooksController,
} from './scr/controllers/BookController.js';
import {
  createEmprestimoController,
  getEmprestimoByUserController,
  updateEmprestimoController,
} from './scr/controllers/EmprestimoController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'backend' });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Library API running' });
});

app.post('/users', createUserController);
app.get('/users', listUsersController);
app.get('/users/search', getUserByParamController);
app.get('/users/:id', getUserByIdController);

app.post('/books', createBookController);
app.get('/books', listBooksController);
app.get('/books/:id', getBookByIdController);

app.post('/emprestimos', createEmprestimoController);
app.get('/users/:userId/emprestimos', getEmprestimoByUserController);
app.patch('/emprestimos/:id', updateEmprestimoController);

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
