import express from 'express';
import dotenv from 'dotenv';
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUserByParamController,
  listUsersController,
  updateUserController,
} from './scr/controllers/userController.js';
import {
  createBookController,
  deleteBookController,
  getBookByIdController,
  listBooksController,
  updateBookController,
} from './scr/controllers/BookController.js';
import {
  createEmprestimoController,
  getEmprestimoByUserController,
  updateEmprestimoController,
  listEmprestimosController,
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
app.patch('/users/:id', updateUserController);
app.delete('/users/:id', deleteUserController);

app.post('/books', createBookController);
app.get('/books', listBooksController);
app.get('/books/:id', getBookByIdController);
app.patch('/books/:id', updateBookController);
app.delete('/books/:id', deleteBookController);

app.post('/emprestimos', createEmprestimoController);
app.get('/emprestimos', listEmprestimosController);
app.get('/users/:userId/emprestimos', getEmprestimoByUserController);
app.patch('/emprestimos/:id', updateEmprestimoController);

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
