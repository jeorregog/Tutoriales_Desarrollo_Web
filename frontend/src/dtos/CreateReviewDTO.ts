export interface CreateReviewDTO {
  bookId: number;
  rating: number;
  comment: string;
  author?: string;
}
