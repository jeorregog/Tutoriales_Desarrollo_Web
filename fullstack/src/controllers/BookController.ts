import type { Request, Response } from 'express';
import { books } from '../data/books.js';
import { Book } from '../models/Book.js';

type ViewData = {
  title: string;
};

export class BookController {
  static index(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'Books' };
    res.render('home/books', { viewData, books });
  }

  static show(req: Request, res: Response): void {
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

    const viewData: ViewData = { title: book.title };
    res.render('home/show', { viewData, book });
  }

  private static renderNotFound(res: Response, title: string): void {
    res.status(404).render('errors/not-found', { viewData: { title } });
  }
}
