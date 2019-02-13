import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {Country} from 'src/classes/country';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-research-view',
  templateUrl: './research-view.component.html',
  styleUrls: ['./research-view.component.css']
})

export class ResearchViewComponent implements OnInit {

  public m_selected: string = 'name';
  public m_research: string = '';
  public m_objects: Country[];

  constructor(private m_restcountries: RestcountriesService, private m_route: ActivatedRoute, private m_router: Router) {
  }

  ngOnInit() {
    this.m_restcountries.getCountriesAll().subscribe(
      d => this.m_objects = d
    );
    if(this.m_route.snapshot.paramMap.get('selected') && this.m_route.snapshot.paramMap.get('research')) {
      this.m_selected = this.m_route.snapshot.paramMap.get('selected');
      this.m_research = this.m_route.snapshot.paramMap.get('research');
    }
    this.m_router.events.subscribe((_val) => {
      if(_val instanceof NavigationEnd) {
        if (this.m_route.snapshot.paramMap.get('selected') && this.m_route.snapshot.paramMap.get('research')) {
          this.m_selected = this.m_route.snapshot.paramMap.get('selected');
          this.m_research = this.m_route.snapshot.paramMap.get('research');
        }
      }
    });
  }

}
