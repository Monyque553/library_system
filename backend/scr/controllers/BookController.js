import {
    createBookService,
    deleteBooksService,
    getBooksService,
    getBookByIdService,
    updateBookService,
} from "../services/BookService.js";

export async function createBookController(req, res) {
    try{
        const book = await createBookService(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export async function listBooksController(_req, res) {
    try {
        const books = await getBooksService();
        res.json(books);
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

export async function getBookByIdController(req, res){
    try{
        const book = await getBookByIdService(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

export async function updateBookController(req, res) {
    try {
        const book = await updateBookService(req.params.id, req.body);
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function deleteBookController(req, res) {
    try {
        const book = await deleteBooksService(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}












