import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from 'src/services/restcountries.service';
import { CountryDetail } from 'src/classes/countryDetail';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private readonly m_KEYS :string[] = Object.keys(new CountryDetail);
  private m_country : CountryDetail;

  constructor(private restcountries : RestcountriesService, private route: ActivatedRoute) {
    this.restcountries.getCountry(this.route.snapshot.paramMap.get('name')).subscribe(
      d => this.m_country = d
    );
   }

  ngOnInit() {
  }

  redirect(_code : string) {
    this.restcountries.getCountry(_code).subscribe(
      d => this.m_country = d
    );
  }

}
