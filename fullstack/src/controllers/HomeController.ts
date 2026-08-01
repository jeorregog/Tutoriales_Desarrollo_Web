import type { Request, Response } from 'express';

type ViewData = {
  title: string;
};

export class HomeController {
  static index(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'Home' };
    res.render('home/index', { viewData });
  }

  static about(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'About' };
    res.render('home/about', { viewData });
  }

  static contact(_req: Request, res: Response): void {
    const viewData: ViewData = { title: 'Contact' };
    res.render('home/contact', { viewData });
  }
}
