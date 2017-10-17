const POSTER_SIZES = [
  92,
  154,
  185,
  342,
  500,
  780
]

export function getPosterSize(targetWidth) {
  for(let size in POSTER_SIZES) {
    if(targetWidth <= size) {
      return `w${size}`;
    }
  }
  return 'original';
}