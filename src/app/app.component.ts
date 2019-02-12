import {Component} from '@angular/core';
import {Link} from 'src/classes/link';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private readonly m_LOCALROUTES: Link[] = [new Link('/home', 'home'),
    new Link('/research', 'earth'),
    new Link('/research/region/Asia', 'asia'),
    new Link('/research/region/Europe', 'europe'),
    new Link('/research/region/Africa', 'africa'),
    new Link('/research/region/Oceania', 'oceania'),
    new Link('/research/region/Americas', 'americas')];

  private readonly m_EXTERNALLINKS: Link[] = [new Link('https://github.com/PamplemousseMR', 'github'),
    new Link('https://fr.linkedin.com/in/romain-manciaux-21989810a', 'linkedin')];

  constructor(private i_router: Router) {
  }

}
