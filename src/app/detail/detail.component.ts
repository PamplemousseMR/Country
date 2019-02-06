import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from 'src/services/restcountries.service';
import { CountryDetail } from 'src/classes/countryDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private m_country : CountryDetail;

  constructor(private restcountries : RestcountriesService, private route: ActivatedRoute) {
    restcountries.getCountry(this.route.snapshot.paramMap.get('name')).subscribe(d =>
      this.m_country = d)
   }

  ngOnInit() {
  }

}
