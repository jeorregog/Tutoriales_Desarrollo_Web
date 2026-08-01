import { Router } from 'express';
import { BookController } from '../controllers/BookController.js';
import { HomeController } from '../controllers/HomeController.js';

export default class Routes {
  static initializeRoutes(): Router {
    const router = Router();

    router.get('/', HomeController.index);
    router.get('/about', HomeController.about);
    router.get('/contact', HomeController.contact);
    router.get('/books', BookController.index);
    router.get('/books/:id', BookController.show);
    router.use((_req, res) => {
      res.status(404).render('errors/not-found', { viewData: { title: 'Page not found' } });
    });

    return router;
  }
}
