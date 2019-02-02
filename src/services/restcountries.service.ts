import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from 'src/classes/country';

@Injectable({
  providedIn: 'root'
})

export class RestcountriesService {

  private m_countriesAll : string = "https://restcountries.eu/rest/v2/all";

  constructor(private i_httpClient: HttpClient) { }

  public getCountriesAll() : Observable<Country[]> {
    return this.i_httpClient.get<Country[]>(this.m_countriesAll);
  }
}
