import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
