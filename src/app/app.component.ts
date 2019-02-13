import {Component} from '@angular/core';
import {Link} from 'src/classes/link';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private readonly m_LOCALROUTES: Link[] = [new Link('/home', 'home', 'home'),
    new Link('/research', 'earth', 'research'),
    new Link('/research/region/Asia', 'asia', 'asia'),
    new Link('/research/region/Europe', 'europe', 'europe'),
    new Link('/research/region/Africa', 'africa', 'africa'),
    new Link('/research/region/Oceania', 'oceania', 'oceania'),
    new Link('/research/region/Americas', 'americas', 'americas'),
    new Link('/research/currencies/Euro', 'euro', 'euro'),
    new Link('/research/currencies/USD', 'usd', 'usd'),
    new Link('/research/currencies/Yen', 'yen', 'yen')];

  private readonly m_EXTERNALLINKS: Link[] = [new Link('https://github.com/PamplemousseMR', 'github', 'github'),
    new Link('https://fr.linkedin.com/in/romain-manciaux-21989810a', 'linkedin', 'linkedin')];

  constructor(private i_router: Router) {
  }

}
