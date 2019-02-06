import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() m_name : String = "default";
  
  m_date : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
