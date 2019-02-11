export class Currency {

  code: string = '';
  name: string = '';
  symbol: string = ''

  public toString(): string {
    return this.code + ': ' + this.name + '(' + this.symbol + ')';
  }

}
