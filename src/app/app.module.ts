import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './generic/header/header.component';
import {MenuComponent} from './generic/menu/menu.component';
import {HomeComponent} from './generic/home/home.component';
import {FluxHeaderComponent} from './generic/flux-header/flux-header.component';
import {FooterComponent} from './generic/footer/footer.component';
import {DeadlinkComponent} from './generic/deadlink/deadlink.component';
import {DeadlinkViewComponent} from './deadlink-view/deadlink-view.component';
import {ResearchViewComponent} from './research-view/research-view.component';
import {DetailViewComponent} from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FluxHeaderComponent,
    FooterComponent,
    DeadlinkComponent,
    DeadlinkViewComponent,
    ResearchViewComponent,
    DetailViewComponent
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
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon("home", domSanitizer.bypassSecurityTrustResourceUrl('./assets/home.svg'));
    matIconRegistry.addSvgIcon("search", domSanitizer.bypassSecurityTrustResourceUrl('./assets/search.svg'));
    matIconRegistry.addSvgIcon("github", domSanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg'));
    matIconRegistry.addSvgIcon("linkedin", domSanitizer.bypassSecurityTrustResourceUrl('./assets/linkedin.svg'));
    matIconRegistry.addSvgIcon("earth", domSanitizer.bypassSecurityTrustResourceUrl('./assets/earth.svg'));
    matIconRegistry.addSvgIcon("africa", domSanitizer.bypassSecurityTrustResourceUrl('./assets/africa.svg'));
    matIconRegistry.addSvgIcon("americas", domSanitizer.bypassSecurityTrustResourceUrl('./assets/americas.svg'));
    matIconRegistry.addSvgIcon("asia", domSanitizer.bypassSecurityTrustResourceUrl('./assets/asia.svg'));
    matIconRegistry.addSvgIcon("europe", domSanitizer.bypassSecurityTrustResourceUrl('./assets/europe.svg'));
    matIconRegistry.addSvgIcon("oceania", domSanitizer.bypassSecurityTrustResourceUrl('./assets/oceania.svg'));

  }
}
