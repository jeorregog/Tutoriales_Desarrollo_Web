import { computed, ref, toValue, type MaybeRefOrGetter } from 'vue';
import type { CreateReviewDTO } from '@/dtos/CreateReviewDTO.js';
import { ReviewService } from '@/services/ReviewService.js';
import { useReviewStore } from '@/stores/reviewstore.js';
import { formatShortDate } from '@/utils/dateFormatter.js';

interface ReviewForm {
  rating: number;
  comment: string;
  author: string;
}

function createInitialForm(): ReviewForm {
  return {
    rating: 5,
    comment: '',
    author: '',
  };
}

export function useBookReviews(bookId: MaybeRefOrGetter<number>) {
  const reviewStore = useReviewStore();
  const form = ref<ReviewForm>(createInitialForm());
  const isSubmitting = ref(false);

  const reviews = computed(() => reviewStore.getReviewsByBookId(toValue(bookId)));
  const canSubmit = computed(() => ReviewService.hasComment(form.value));

  function submitReview(): void {
    if (!canSubmit.value) return;

    isSubmitting.value = true;

    const trimmedAuthor = form.value.author.trim();
    const review: CreateReviewDTO = {
      bookId: toValue(bookId),
      rating: form.value.rating,
      comment: form.value.comment,
      ...(trimmedAuthor ? { author: trimmedAuthor } : {}),
    };

    try {
      reviewStore.addReview(review);
      form.value = createInitialForm();
    } finally {
      isSubmitting.value = false;
    }
  }

  return {
    canSubmit,
    form,
    formatReviewDate: formatShortDate,
    isSubmitting,
    reviews,
    submitReview,
  };
}
