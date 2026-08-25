import { createUserService, getUsersService, getUserByIdService } from '../services/userService.js';

export async function createUserController(req, res) {
  try {
    user = getUserByParamService({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: 'Usuário com este email já existe.' });
    }
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function listUsersController(_req, res) {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserByIdController(req, res){
    try {
        const user = await getUserByIdService(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export async function getUserByParamController(req, res) {
    try {
        const filters = req.query;
        const user = await getUserByParamService(filters);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
