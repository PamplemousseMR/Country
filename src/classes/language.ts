export class Language {

  iso639_1: string = '';
  iso639_2: string = '';
  name: string = '';
  nativeName: string = '';

  public toString(): string {
    return this.name + '(' + this.nativeName + ', ' + this.iso639_1 + ', ' + this.iso639_2 + ')';
  }

}
