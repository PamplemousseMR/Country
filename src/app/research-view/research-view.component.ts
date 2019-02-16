import {Component, OnInit} from '@angular/core';
import {RestcountriesService} from 'src/services/restcountries.service';
import {Country} from 'src/classes/country';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-research-view',
  templateUrl: './research-view.component.html',
  styleUrls: ['./research-view.component.css']
})

export class ResearchViewComponent implements OnInit {

  public m_selected: string = 'name';
  public m_research: string = '';
  public m_objects: Country[];
  public m_filterObjects: Country[];

  public m_displayedColumns: string[] = ['name', 'detail'];

  public m_pageEvent: PageEvent = {pageIndex: 0, pageSize: 10, length: 100};
  public m_length: number = 100;
  public m_pageSize: number = 10;
  public m_pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private m_restcountries: RestcountriesService, private m_route: ActivatedRoute, private m_router: Router) {
  }

  ngOnInit() {
    if(this.m_route.snapshot.paramMap.get('selected') && this.m_route.snapshot.paramMap.get('research')) {
      this.m_selected = this.m_route.snapshot.paramMap.get('selected');
      this.m_research = this.m_route.snapshot.paramMap.get('research');
    }
    this.m_restcountries.getCountriesAll().subscribe(
      d => {
        this.m_objects = d;
        this.m_filterObjects = d;
        this.applyFilter();
      }
    );
    this.m_router.events.subscribe((_val) => {
      if(_val instanceof NavigationEnd) {
        if (this.m_route.snapshot.paramMap.get('selected') && this.m_route.snapshot.paramMap.get('research')) {
          this.m_selected = this.m_route.snapshot.paramMap.get('selected');
          this.m_research = this.m_route.snapshot.paramMap.get('research');
          this.applyFilter();
        }
      }
    });
  }

  applyFilter() {
    this.m_filterObjects = this.m_objects.filter(c => c[this.m_selected].toString() !== '' ? c[this.m_selected].toString().toLowerCase().includes(this.m_research.toLowerCase()) : false);
    this.m_length = this.m_filterObjects.length;
    this.m_filterObjects = this.m_filterObjects.slice(this.m_pageEvent.pageIndex * this.m_pageEvent.pageSize, this.m_pageEvent.pageIndex * this.m_pageEvent.pageSize + this.m_pageEvent.pageSize);
  }

}
