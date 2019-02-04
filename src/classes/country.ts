import { Currency } from './currency';
import { Language } from './language';
import { Translations } from './translations';
import { RegionalBlock } from './regionalBlock';

export class Country {

    name : string = "";
    topLevelDomain : string [];
    alpha2Code : string = "";
    alpha3Code : string = "";
    callingCodes : string [];
    capital : string = "";
    altSpellings : string [];
    region : string = "";
    subregion : string = "";
    population : number = 0;
    latlng : number [];
    demonym : string = "";
    area : number = 0;
    gini : number = 0;
    timezones : string [];
    borders : string[];
    nativeName : string = "";
    numericCode : string = "";
    currencies : Currency [];
    languages : Language [];
    translations : Translations;
    flag : string = "";
    regionalBlocs : RegionalBlock [];
    cioc : string = ""; 
       
}