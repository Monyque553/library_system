import {
  createUserService,
  deleteUserService,
  getUsersService,
  getUserByIdService,
  getUserByParamService,
  updateUserService,
} from '../services/userService.js';

export async function createUserController(req, res) {
  try {
    const existingUsers = await getUserByParamService({ email: req.body.email });
    if (existingUsers.length > 0) {
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
        if (Object.keys(req.query).length === 0) {
            return res.status(400).json({ error: 'Informe pelo menos um filtro.' });
        }

        const users = await getUserByParamService(req.query);
        if (users.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }

export async function updateUserController(req, res) {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteUserController(req, res) {
  try {
    const user = await deleteUserService(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
