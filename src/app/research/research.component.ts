import { Component, OnInit } from '@angular/core';
import { RestcountriesService } from 'src/services/restcountries.service';
import { Country } from 'src/classes/country';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})

export class ResearchComponent implements OnInit {

  m_countries : Country[];
  m_step : number = -1;

  m_research : string = "";
  m_selected : string = "name";

  constructor(private restcountries : RestcountriesService) {
    restcountries.getCountriesAll().subscribe(d =>
      this.m_countries = d)
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
