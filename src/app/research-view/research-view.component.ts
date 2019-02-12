import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {Country} from 'src/classes/country';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-research-view',
  templateUrl: './research-view.component.html',
  styleUrls: ['./research-view.component.css']
})

export class ResearchViewComponent implements OnInit {

  private m_selected: string = 'name';
  private m_research: string = '';
  private m_objects: Country[];

  constructor(private m_restcountries: RestcountriesService, private m_route: ActivatedRoute) {
  }

  ngOnInit() {
    this.m_restcountries.getCountriesAll().subscribe(
      d => this.m_objects = d
    );
    if (this.m_route.snapshot.paramMap.get('selected') && this.m_route.snapshot.paramMap.get('research')) {
      this.m_selected = this.m_route.snapshot.paramMap.get('selected');
      this.m_research = this.m_route.snapshot.paramMap.get('research');
    }
  }

}
