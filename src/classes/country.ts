import {Currency} from './currency';
import {Language} from './language';
import {Translations} from './translations';
import {RegionalBlock} from './regionalBlock';
import {Type} from "class-transformer";

export class Country {

  name: string = '';
  capital: string = '';
  alpha2Code: string = '';
  alpha3Code: string = '';
  region: string = '';
  subregion: string = '';
  population: number = 0;
  demonym: string = '';
  area: number = 0;
  gini: number = 0;
  nativeName: string = '';
  numericCode: string = '';
  cioc: string = '';
  topLevelDomain: string [];
  callingCodes: string [];
  altSpellings: string [];
  latlng: number [];
  timezones: string [];
  borders: string[];
  @Type(
    ()  => Currency
  )
  currencies: Currency [];
  @Type(
    ()  => Language
  )
  languages: Language [];
  @Type(
    ()  => Translations
  )
  translations: Translations;
  @Type(
    ()  => RegionalBlock
  )
  regionalBlocs: RegionalBlock [];
  flag: string = "";
  
}
