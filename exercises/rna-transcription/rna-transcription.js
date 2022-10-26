const complements = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export function toRna(rna) {
  return [...rna].map(nucleotide => complements[nucleotide]).join('');
};
