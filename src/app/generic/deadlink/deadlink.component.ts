import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-deadlink',
  templateUrl: './deadlink.component.html',
  styleUrls: ['./deadlink.component.css']
})

export class DeadlinkComponent implements OnInit {

  @Input() readonly m_img : string = "";

  constructor() {
  }

  ngOnInit() {
  }

}
