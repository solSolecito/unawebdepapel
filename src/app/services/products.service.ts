import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	// Este servicio maneja los productos
	constructor(private firestore: Firestore) {

	}

	// Uno solo

	// Obtener
	getProduct(product: Product) {
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

	// Añadir
	addProduct(product: Product) {
		// Requiere permiso de editor
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

	// Editar
	modifyProduct(product: Product) {
		// Requiere permiso de editor
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

	// Eliminar
	deleteProduct(product: Product) {
		// Requiere permiso de editor
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

	// Múltiples productos

	// Obtener
	getAllProducts(): Observable<Product[]> {
		const productsRef = collection(this.firestore, 'productos');
		return collectionData(productsRef, { idField: 'id' }) as Observable<Product[]>;
	}

	searchProducts() {

	}

	// Añadir
	addProducts(product: Product) {
		// Requiere permiso de editor
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

	// Editar
	modifyProducts(product: Product) {
		// Requiere permiso de editor
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

	// Eliminar
	deleteProducts(product: Product) {
		// Requiere permiso de editor
		const productsRef = collection(this.firestore, 'productos');
		return addDoc(productsRef, product);
	}

}
