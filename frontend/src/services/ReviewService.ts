import type { CreateReviewDTO } from '@/dtos/CreateReviewDTO.js';
import type { ReviewInterface } from '@/interfaces/ReviewInterface.js';

const MIN_RATING = 1;
const MAX_RATING = 5;

export class ReviewService {
  static getReviewsByBookId(reviews: ReviewInterface[], bookId: number): ReviewInterface[] {
    return reviews.filter((review) => review.bookId === bookId);
  }

  static createReview(reviews: ReviewInterface[], review: CreateReviewDTO): ReviewInterface {
    const author = review.author?.trim();

    return {
      id: this.getNextId(reviews),
      bookId: review.bookId,
      rating: this.normalizeRating(review.rating),
      comment: this.normalizeComment(review.comment),
      ...(author ? { author } : {}),
      createdAt: new Date().toISOString(),
    };
  }

  static hasComment(review: Pick<CreateReviewDTO, 'comment'>): boolean {
    return this.normalizeComment(review.comment).length > 0;
  }

  private static getNextId(reviews: ReviewInterface[]): number {
    if (reviews.length === 0) return 1;

    return Math.max(...reviews.map((review) => review.id)) + 1;
  }

  private static normalizeRating(rating: number): number {
    return Math.min(MAX_RATING, Math.max(MIN_RATING, rating));
  }

  private static normalizeComment(comment: string): string {
    return comment.trim();
  }
}
