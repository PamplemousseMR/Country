import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {Country} from 'src/classes/country';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})

export class DetailViewComponent implements OnInit {

  private readonly m_KEYS: string[] = Object.keys(new Country);
  private m_country: Country;

  constructor(private m_restcountries: RestcountriesService, private m_route: ActivatedRoute) {
  }

  ngOnInit() {
    this.m_restcountries.getCountry(this.m_route.snapshot.paramMap.get('code')).subscribe(
      d => this.m_country = d
    );
  }

  redirect(_code: string) {
    this.m_restcountries.getCountry(_code).subscribe(
      d => this.m_country = d
    );
  }

}
