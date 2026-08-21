import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CreateReviewDTO } from '@/dtos/CreateReviewDTO.js';
import type { ReviewInterface } from '@/interfaces/ReviewInterface.js';
import { ReviewService } from '@/services/ReviewService.js';

export const useReviewStore = defineStore('review', () => {
  const reviews = ref<ReviewInterface[]>([]);

  function getReviewsByBookId(bookId: number): ReviewInterface[] {
    return ReviewService.getReviewsByBookId(reviews.value, bookId);
  }

  function addReview(review: CreateReviewDTO): void {
    if (!ReviewService.hasComment(review)) return;

    reviews.value.push(ReviewService.createReview(reviews.value, review));
  }

  return { addReview, getReviewsByBookId, reviews };
});
