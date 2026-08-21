const shortDateFormatter = new Intl.DateTimeFormat('es-CO', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export function formatShortDate(iso?: string): string {
  if (!iso) return '';

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) return '';

  return shortDateFormatter.format(date);
}
