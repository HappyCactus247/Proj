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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { RewComponent } from './rew/rew.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CenterComponent,
    PavlichenkoLudmilaMihailovnaComponent,
    ShareComponent,
    FAQComponent,
    LinksComponent,
    RewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
