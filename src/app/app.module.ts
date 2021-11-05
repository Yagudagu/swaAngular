import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondComponent } from './components/second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';

const appRoutes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent,
    TwoComponent,
    ThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
