import { Currency } from './currency';
import { Language } from './language';
import { Translations } from './translations';
import { RegionalBlock } from './regionalBlock';
import { Country } from './country';

export class CountryDetail extends Country {

    topLevelDomain : string [];
    callingCodes : string [];
    altSpellings : string [];
    latlng : number [];
    timezones : string [];
    borders : string[];
    currencies : Currency [];
    languages : Language [];
    translations : Translations;
    regionalBlocs : RegionalBlock [];
    flag : string = "";

}