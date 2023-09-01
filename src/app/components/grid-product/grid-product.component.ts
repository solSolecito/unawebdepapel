import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
	selector: 'app-grid-product',
	templateUrl: './grid-product.component.html',
	styleUrls: ['./grid-product.component.scss']
})

export class GridProductComponent {
	@Input() productData: Product = {
		name: '',
		category: '',
		designer: '',
		value: 0,
		photosUrls: [],
		tags: [],
		stock: [],
		stats: [],
	}

}
