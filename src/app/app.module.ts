import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CatsComponent } from './cats.component';
import { CatService } from './services/CatsService';
import { CatFormComponent } from './catsform.component';

const appRoutes: Routes = [
  { path: 'catform', component: CatFormComponent },
  { path: 'cats', component: CatsComponent },
  { path: '', redirectTo: '/cats', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    CatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
