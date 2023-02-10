const INVALID_CHARS = /[^ACTG]/

export function countNucleotides(strand) {
    strand = strand.toUpperCase();
    if (strand.search(INVALID_CHARS) >= 0) {
        throw new Error('Invalid nucleotide in strand')
    }
    let a_count = (strand.match(/[A]/g) || []).length;
    let c_count = (strand.match(/[C]/g) || []).length;
    let g_count = (strand.match(/[G]/g) || []).length;
    let t_count = (strand.match(/[T]/g) || []).length;
    return [a_count, c_count, g_count, t_count].join(" ");
}
