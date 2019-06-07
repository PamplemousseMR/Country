export class Currency {

  name: string = '';
  code: string = '';
  symbol: string = '';

  public toString(): string {
    return this.name + ': ' + this.code + '(' + this.symbol + ')';
  }

}
