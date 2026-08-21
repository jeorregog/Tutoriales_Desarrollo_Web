import { computed, ref } from 'vue';
import type { BookInterface } from '@/interfaces/BookInterface.js';

export function useBookFilters(books: BookInterface[]) {
  const selectedCategory = ref('');

  const categoryOptions = computed(() =>
    Array.from(new Set(books.map((book) => book.category))).sort((current, next) =>
      current.localeCompare(next),
    ),
  );

  const filteredBooks = computed(() => {
    if (!selectedCategory.value) return books;

    return books.filter((book) => book.category === selectedCategory.value);
  });

  return {
    categoryOptions,
    filteredBooks,
    selectedCategory,
  };
}
