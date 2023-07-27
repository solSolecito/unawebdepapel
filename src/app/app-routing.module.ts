import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreen } from './screens/home-screen/home-screen.component';
import { StoreScreen } from './screens/store-screen/store-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreen },
  { path: 'store', component: StoreScreen },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
