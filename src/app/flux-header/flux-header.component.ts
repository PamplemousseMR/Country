import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flux-header',
  templateUrl: './flux-header.component.html',
  styleUrls: ['./flux-header.component.css']
})
export class FluxHeaderComponent implements OnInit {

  @Input() m_title : string = "default";

  constructor() { }

  ngOnInit() {
  }

}
