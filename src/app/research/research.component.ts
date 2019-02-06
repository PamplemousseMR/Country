import { Component, OnInit, Input } from '@angular/core';
import { RestcountriesService } from 'src/services/restcountries.service';
import { Country } from 'src/classes/country';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})

export class ResearchComponent implements OnInit {

  m_keys :string[] = Object.keys(new Country);
  m_selected : string = this.m_keys[0];
  m_research : string = "";
  m_step : number = -1;
  m_objects : Country[];

  constructor(private restcountries : RestcountriesService) {
    restcountries.getCountriesAll().subscribe(d =>
      this.m_objects = d)
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
