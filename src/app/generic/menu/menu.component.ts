import {Component, Input, OnInit} from '@angular/core';
import {Link} from 'src/classes/link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() private readonly m_LOCALROUTES: Link[];
  @Input() private readonly m_EXTERNALLINKS: Link[];

  constructor() {
  }

  ngOnInit() {
  }

}
