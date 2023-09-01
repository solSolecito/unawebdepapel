export interface Product {
    name: string;
    category: string;
    designer: string;
    value: number;
    photosUrls: string[];
    tags: string[];
    stock: number[]; // Cambiar a un arreglo de interfaz stock   
    stats: number[]; // Cambiar a un arreglo de interfaz stats: impresiones. vistas, ventas    
}
