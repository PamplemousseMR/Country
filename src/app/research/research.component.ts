import { Component, OnInit, Input } from '@angular/core';
import { RestcountriesService } from 'src/services/restcountries.service';
import { Country } from 'src/classes/country';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})

export class ResearchComponent implements OnInit {

  private readonly m_KEYS :string[] = Object.keys(new Country);
  private m_selected : string = this.m_KEYS[0];
  private m_research : string = "";
  private m_step : number = -1;
  private m_objects : Country[];

  constructor(private restcountries : RestcountriesService) {
    this.restcountries.getCountriesAll().subscribe(
      d => this.m_objects = d
    );
   }

  ngOnInit() {
  }

  setStep(index: number) {
    this.m_step = index;
  }

  nextStep() {
    this.m_step++;
  }

  prevStep() {
    this.m_step--;
  }

}
