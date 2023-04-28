export function getPrice (value: number): string {
  const [integer, decimals] = value.toFixed(2).split('.')
  return `R$ ${integer},${decimals}`
}
