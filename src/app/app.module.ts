import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { FluxHeaderComponent } from './flux-header/flux-header.component';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ResearchComponent,
    FluxHeaderComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIcon("home", domSanitizer.bypassSecurityTrustResourceUrl('./assets/home.svg'));
    matIconRegistry.addSvgIcon("search", domSanitizer.bypassSecurityTrustResourceUrl('./assets/search.svg'));
    matIconRegistry.addSvgIcon("github", domSanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg'));
    matIconRegistry.addSvgIcon("linkedin", domSanitizer.bypassSecurityTrustResourceUrl('./assets/linkedin.svg'));
    matIconRegistry.addSvgIcon("earth", domSanitizer.bypassSecurityTrustResourceUrl('./assets/earth.svg'));
    matIconRegistry.addSvgIcon("detail", domSanitizer.bypassSecurityTrustResourceUrl('./assets/detail.svg'));
  }
}