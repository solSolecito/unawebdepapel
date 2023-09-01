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
			gradient: false,
			button: false,
		}
	];
	novedades = {
		title: 'NOVEDADES',
		src: '../../assets/images/banner1-local.jpg',
		subtitle: 'Tenemos la obra perfecta para ti',
	}

}
