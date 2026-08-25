import { prisma } from '../database/prisma.js';

export async function createBookService(data) {
    if(data?.nome || data?.autor || data?.sinopse || data?.status){
        throw new Error('Todos os campos são obrigatórios.');
    }

    const book = await prisma.book.create({data: {
        nome: data.nome,
        autor: data.autor,
        sinopse: data.sinopse,
        status: data.status
    }});

    return book;
}

export async function getBooksService(){
    return prisma.book.findMany();
}


export async function getBookByIdService(id){
    const book = await prisma.book.findUnique({
        where: { id: Number(id)},
    });

    return book;
}


export async function updateBookService (id, data) {
    const book = await prisma.book.update({
        where: { id: Number(id)},
        data: data
    });
    return book;
}

export async function deleteBooksService(id) {
    const book = await prisma.book.delete({
        where: { id: Number (id) },
    });
}

