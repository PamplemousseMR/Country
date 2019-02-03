import { Component } from '@angular/core';
import { Link } from 'src/classes/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  m_localRoutes : Link[] = [  new Link("/", "home"), 
                            new Link("/research", "city")];

  m_externalLinks : Link[] = [ new Link("https://github.com/PamplemousseMR", "github-face"),
                              new Link("https://fr.linkedin.com/in/romain-manciaux-21989810a", "linkedin")];

  constructor() {
  }

 }