import { books } from '../data/books.js';
import { Book } from '../models/Book.js';
export class BookController {
    static index(_req, res) {
        const viewData = { title: 'Books' };
        res.render('home/books', { viewData, books });
    }
    static show(req, res) {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) {
            BookController.renderNotFound(res, 'Invalid book ID');
            return;
        }
        const book = Book.findById(books, id);
        if (!book) {
            BookController.renderNotFound(res, 'Book not found');
            return;
        }
        const viewData = { title: book.title };
        res.render('home/show', { viewData, book });
    }
    static renderNotFound(res, title) {
        res.status(404).render('errors/not-found', { viewData: { title } });
    }
}
//# sourceMappingURL=BookController.js.map