import { Component } from '@angular/core';

@Component({
  selector: 'app-store-screen',
  templateUrl: './store-screen.component.html',
  styleUrls: ['./store-screen.component.scss']
})
export class StoreScreen {
  grids = [
    {
      title: 'MÁSCARAS',
      src: '../../assets/images/banner1-local.jpg',
      subtitle: 'Tenemos la obra perfecta para ti',
    }
  ]
}
