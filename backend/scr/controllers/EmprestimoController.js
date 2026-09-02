import { createEmprestimoService, getEmprestimoByUser, updateEmprestimoService } from '../services/EmprestimoService.js';

export async function createEmprestimoController(req, res) {
    try {
        const emprestimo = await createEmprestimoService(req.body);
        res.status(201).json(emprestimo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function getEmprestimoByUserController(req, res) {
    try {
        const emprestimos = await getEmprestimoByUser(req.params.userId);
        res.status(200).json(emprestimos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function updateEmprestimoController(req, res) {
    try {
        const emprestimo = await updateEmprestimoService(req.params.id, req.body);
        res.status(200).json(emprestimo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

