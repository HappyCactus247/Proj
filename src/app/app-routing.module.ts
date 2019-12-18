import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { PavlichenkoLudmilaMihailovnaComponent } from './pavlichenko-ludmila-mihailovna/pavlichenko-ludmila-mihailovna.component';
import { ShareComponent } from './share/share.component';
import { FAQComponent } from './faq/faq.component';


const routes: Routes = [
  { path: '', component: CenterComponent },
  { path: 'PavlichenkoLudmilaMihailovna', component: PavlichenkoLudmilaMihailovnaComponent },
  { path: 'ShareComponent', component: ShareComponent},
  { path: 'FAQComponent', component: FAQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
