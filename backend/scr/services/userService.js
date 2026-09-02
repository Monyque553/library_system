import { prisma } from '../database/prisma.js';

export async function createUserService(data) {
  if (!data?.nome || !data?.email || !data?.senha || !data?.papel) {
    throw new Error('Todos os campos são obrigatórios.');
  }

  const user = await prisma.user.create({
    data: {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      papel: data.papel,
    },
  });

  return user;
}

export async function getUsersService() {
  return prisma.user.findMany();
}

export async function getUserByIdService(id){
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
    });
    return user;
}

export async function getUserByParamService(filters) {
    const user = await prisma.user.findUnique({
        where: filters,
    });
    return user;
}

export async function updateUserService (id, data) {
    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: data
    });
    return user;
}

export async function deleteUserService(id){
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  return user;
}
