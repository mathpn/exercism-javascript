export class Matrix {
  constructor(raw_string) {
    this._rows = raw_string.split('\n').map(x => x.split(' ').map(Number));
    this._columns = this._rows[0].map((_, i) => this._rows.map(row => row[i]));
  }
  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
