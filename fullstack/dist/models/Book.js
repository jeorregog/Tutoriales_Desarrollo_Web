export class Book {
    id;
    title;
    category;
    price;
    stock;
    constructor(id, title, category, price, stock) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
    static findById(books, id) {
        return books.find((book) => book.id === id);
    }
}
//# sourceMappingURL=Book.js.map