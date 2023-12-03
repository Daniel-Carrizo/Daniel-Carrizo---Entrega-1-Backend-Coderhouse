class ProductManager {
    constructor() {
        this.products =[];
    }

    static id= 0;

    addProduct(title,description,price,image,code,stock) {
        ProductManager.id++;
        this.products.push ({title,description,price,image,code,stock,id:ProductManager.id});
    }

    getProduct(){
        return this.products;
    }

    getProductById(id) {
        if (this.products.find((producto)=> producto.id === id)){
            console.log ("Not found");
        } else{
        console.log(this.products.find((producto)=> producto.id === id));
        }
    }
}


const productos= new ProductManager;

productos.addProduct("titulo1","descripcion1", 1000,"imagen1", "abc123",5);
productos.addProduct("titulo2","descripcion2", 1000,"imagen2", "abc123",5);
console.log(productos.getProduct());

productManager.getProductById(1); 