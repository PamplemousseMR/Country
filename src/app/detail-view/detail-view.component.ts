import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {Country} from 'src/classes/country';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})

export class DetailViewComponent implements OnInit {

  public m_country: Country;

  constructor(private m_restcountries: RestcountriesService, private m_route: ActivatedRoute, private m_router: Router) {
  }

  ngOnInit() {
    this.m_restcountries.getCountry(this.m_route.snapshot.paramMap.get('code')).subscribe(
      d => this.m_country = d
    );
    this.m_router.events.subscribe((_val) => {
      if(_val instanceof NavigationEnd) {
        this.m_restcountries.getCountry(this.m_route.snapshot.paramMap.get('code')).subscribe(
          d => this.m_country = d
        );
      } 
    });
  }

}
