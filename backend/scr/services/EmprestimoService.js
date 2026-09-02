import { prisma } from '../database/prisma.js';

export async function createEmprestimoService(data) {
    if (!data?.userId || !data?.bookId || !data?.dataEmprestimo || !data?.prazoEmprestimo) {
        throw new Error('Todos os campos são obrigatórios.');
    }

    const emprestimo = await prisma.emprestimo.create({
        data: {
          livroId: data.bookId,
          userId: data.userId,
          dataEmprestimo: new Date(data.dataEmprestimo),
          prazoEmprestimo: Number(data.prazoEmprestimo),
          isQuitado: data.isQuitado !== undefined ? Boolean(data.isQuitado) : false,
        },
    });
    
    return emprestimo;
}

export async function getEmprestimoByUser (userId) {
    const emprestimos = await prisma.emprestimo.findMany({
        where: { userId: Number(userId) },
    });
    return emprestimos;
}


export async function updateEmprestimoService (id, data) {
    const emprestimo = await prisma.emprestimo.update({
        where: { id: Number(id)},
        data: data
    });
    return emprestimo;
}


