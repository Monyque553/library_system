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
  return prisma.user.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      papel: true,
    },
  });
}

export async function getUserByIdService(id) {
  return prisma.user.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      nome: true,
      email: true,
      papel: true,
    },
  });
}

export async function getUserByParamService(filters) {
  return prisma.user.findMany({
    where: {
      nome: filters.nome
        ? { contains: filters.nome, mode: 'insensitive' }
        : undefined,
      email: filters.email
        ? { equals: filters.email, mode: 'insensitive' }
        : undefined,
      papel: filters.papel || undefined,
    },
    select: {
      id: true,
      nome: true,
      email: true,
      papel: true,
    },
  });
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
