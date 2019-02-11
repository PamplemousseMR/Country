import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {CountryDetail} from 'src/classes/countryDetail';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private readonly m_KEYS: string[] = Object.keys(new CountryDetail);
  private m_country: CountryDetail;

  constructor(private m_restcountries: RestcountriesService, private m_route: ActivatedRoute) {
  }

  ngOnInit() {
    this.m_restcountries.getCountry(this.m_route.snapshot.paramMap.get('name')).subscribe(
      d => this.m_country = d
    );
  }

  redirect(_code: string) {
    this.m_restcountries.getCountry(_code).subscribe(
      d => this.m_country = d
    );
  }

}
