import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from 'src/classes/country';
import {map} from "rxjs/internal/operators";
import {plainToClass} from "class-transformer";

@Injectable({
  providedIn: 'root'
})

export class RestcountriesService {

  private readonly m_COUNTRIES_ALL: string = "https://restcountries.eu/rest/v2/all";
  private readonly m_COUNTRY: string = "https://restcountries.eu/rest/v2/alpha/";

  constructor(private i_httpClient: HttpClient) {
  }

  public getCountriesAll(): Observable<Country[]> {
    return this.i_httpClient.get<Country[]>(this.m_COUNTRIES_ALL).pipe(
      map((_countries : object[]) => {
        return _countries.map((_country : object) => plainToClass<Country, object>(Country, _country))
      })
    );
  }

  public getCountry(_alpha3Code: string): Observable<Country> {
    return this.i_httpClient.get<Country>(this.m_COUNTRY + _alpha3Code).pipe(
      map((_country: object) => plainToClass<Country, object>(Country, _country))
    );
  }
}
