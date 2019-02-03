import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/classes/link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() m_localRoutes : Link[];
  @Input() m_externalLinks : Link[];

  constructor() { }

  ngOnInit() {
  }

}
