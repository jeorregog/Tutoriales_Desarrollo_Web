export class HomeController {
    static index(_req, res) {
        const viewData = { title: 'Home' };
        res.render('home/index', { viewData });
    }
    static about(_req, res) {
        const viewData = { title: 'About' };
        res.render('home/about', { viewData });
    }
    static contact(_req, res) {
        const viewData = { title: 'Contact' };
        res.render('home/contact', { viewData });
    }
}
//# sourceMappingURL=HomeController.js.map