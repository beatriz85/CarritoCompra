export  class Articulo{
    imagen:string;
    descripcion:string;
    color:string;
    talla:number;
    cantidad:number;
    rebajado:boolean;
    precioOriginal:number;
    precioRebajado:number;
    constructor(imagen,descripcion,color,talla,cantidad,rebajado,precioOriginal,precioRebajado){
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.color=color;
        this.talla=talla;
        this.cantidad=cantidad;
        this.rebajado=rebajado;
        this.precioOriginal=precioOriginal;
        if(this.rebajado==true){
            this.precioRebajado=precioRebajado;
        }
    }
    
}