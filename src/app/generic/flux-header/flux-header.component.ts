import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flux-header',
  templateUrl: './flux-header.component.html',
  styleUrls: ['./flux-header.component.css']
})

export class FluxHeaderComponent implements OnInit {

  @Input() private readonly m_TITLE: string = 'default';

  constructor() {
  }

  ngOnInit() {
  }

}
