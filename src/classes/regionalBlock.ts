export class RegionalBlock {

  acronym: string = '';
  name: string = '';

  public toString(): string {
    return this.acronym + ': ' + this.name;
  }

}
