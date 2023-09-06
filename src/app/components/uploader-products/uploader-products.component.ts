import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uploader-products',
  templateUrl: './uploader-products.component.html',
  styleUrls: ['./uploader-products.component.scss']
})
export class UploaderProductsComponent {

  /* General */
  @Input() new: boolean = true;
  @Input() name: string = '';
	@Input() type: string = '';
	@Input() material: string = '';

  /* Técnicos */
	@Input() designer: string = '';
	@Input() pages: number = 0;
	@Input() pieces: number = 0;
  @Input() dif: number = 0;
  @Input() colors: number = 0;

  /* Cameo */
  @Input() digital: boolean = false;
  @Input() mats: number = 0;
	@Input() time: number = 0;

  /* Adicional */
  @Input() notes: string = '';
	@Input() tags: string[] = [];
  @Input() stock: number = 0;
	@Input() size: string = '';
  @Input() aditionalFields: string[][] = [];

  /* Fotos */
  @Input() photosRoutes: string[] = [];
  
  /* Precios */
  @Input() settedPrices: number[][] = [];

    changes:number = 0;

    /* --- VALIDACIONES --- */
    
    
  suggestPrices(){
    // DEBE tener dificultad
    if( !this.dif ) {
      return {
        message: "ERROR",
        res: []
      }
    }
  }

    setSuggestedPrices(){
        
    }
    
saveProduct(){
  if( this.new ) {
    Llamar al servicio CREAR PRODUCTO
  } else {
    Llamar al servicio EDITAR PRODUCTO
  }

}

    goBack(){
        //Volver atrás
    }
}
