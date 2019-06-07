import {Component, Input, OnInit} from '@angular/core';
import {Link} from 'src/classes/link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() public readonly m_LOCALROUTES: Link[];
  @Input() public readonly m_EXTERNALLINKS: Link[];

  constructor() {
  }

  ngOnInit() {
  }

}
