const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatCopPrice(price: number): string {
  const amount = copFormatter.format(price).replace(/^\s*\$\s?/, '');

  return `$${amount} COP`;
}
