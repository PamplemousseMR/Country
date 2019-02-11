import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {Country} from 'src/classes/country';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})

export class ResearchComponent implements OnInit {

  private readonly m_KEYS: string[] = Object.keys(new Country);
  private m_selected: string = this.m_KEYS[0];
  private m_research: string = "";
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
