import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CenterComponent } from './center/center.component';
import { PavlichenkoLudmilaMihailovnaComponent } from './pavlichenko-ludmila-mihailovna/pavlichenko-ludmila-mihailovna.component';
import { ShareComponent } from './share/share.component';
import { FAQComponent } from './faq/faq.component';
import { LinksComponent } from './links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CenterComponent,
    PavlichenkoLudmilaMihailovnaComponent,
    ShareComponent,
    FAQComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
