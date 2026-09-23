export declare class Book {
    id: number;
    title: string;
    category: string;
    price: number;
    stock: number;
    constructor(id: number, title: string, category: string, price: number, stock: number);
    static findById(books: Book[], id: number): Book | undefined;
}
//# sourceMappingURL=Book.d.ts.map