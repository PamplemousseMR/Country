import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() public readonly m_NAME: String = 'default';

  public readonly m_DATE: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
