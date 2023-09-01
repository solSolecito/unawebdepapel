import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-gestor-products',
  templateUrl: './gestor-products.component.html',
  styleUrls: ['./gestor-products.component.scss']
})
export class GestorProductsScreen {
  constructor ( private productsService:ProductsService ) {

  }
  // ngOnSubmit(){ const response = await this.productsService()}
}

// https://www.youtube.com/watch?v=t_YSrxj0wGY