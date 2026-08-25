export async function createEmprestimoService(data) {
    if (!data?.userId || !data?.bookId || !data?.dataEmprestimo || !data?.prazoEmprestimo) {
        throw new Error('Todos os campos são obrigatórios.');
    }

    const emprestimo = await prisma.emprestimo.create({
        data: {
          livroId: data.bookId,
          usuarioId: data.userId,
          dataEmprestimo: new Date(data.dataEmprestimo),
          prazoEmprestimo: Number(data.prazoEmprestimo),
          dataDevolucao: data.dataDevolucao ? new Date(data.dataDevolucao) : null,
          isQuitado: data.isQuitado !== undefined ? Boolean(data.isQuitado) : false,
        },
    });  
}

export async function getEmprestimoByUser (userId) {
    const emprestimos = await prisma.emprestimo.Boolean.findMany({
        where: { usuarioId: Number(userId) },
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






export async function createUserService(data) {
  if (!data?.nome || !data?.email || !data?.senha || !data?.matriculaSiape || !data?.papel) {
    throw new Error('Todos os campos são obrigatórios.');
  }

  const user = await prisma.user.create({
    data: {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      matriculaSiape: data.matriculaSiape,
      papel: data.papel,
    },
  });

  return user;
}