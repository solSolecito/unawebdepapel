import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreen {
  banners = [
    {
      text: 'Construimos un mundo en papel',
      src: '../../assets/images/banner1-local.jpg',
      gradient: true,
      button: false,
    }
  ]
}
