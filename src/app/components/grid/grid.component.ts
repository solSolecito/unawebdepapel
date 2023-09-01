import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent {
	@Input() title: string = '';
	@Input() subtitle: string = '';
	@Input() pagination: boolean = true;
	@Input() forPage: number = 12;
	@Input() action: () => void = () => { };
	@Input() currentPage: number = 0;

	allProducts: [] = [];
	paginatedProducts: [] = [];

	ngOnInit () {
		// Importa productos
	}


}
