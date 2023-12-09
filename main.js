class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    validateProperty(property, propertyName) {
        if (!property) {
            console.log(`Invalid ${propertyName}. ${propertyName} must be provided.`);
            return false;
        }
        return true;
    }

    addProduct(title, description, price, image, code, stock) {
        // Validation
        if (
            !this.validateProperty(title, 'title') ||
            !this.validateProperty(description, 'description') ||
            !this.validateProperty(price, 'price') ||
            !this.validateProperty(image, 'image') ||
            !this.validateProperty(code, 'code') ||
            !this.validateProperty(stock, 'stock')
        ) {
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.log("Product with the same code already exists.");
            return;
        }

        ProductManager.id++;
        this.products.push({ title, description, price, image, code, stock, id: ProductManager.id });
    }

    getProduct() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(producto => producto.id === id);
        if (!product) {
            console.log("Product not found");
            return;
        }
        return product;
    }
}

const productos = new ProductManager;

productos.addProduct("titulo1", "descripcion1", 1000, "imagen1", "abc123", 5);
productos.addProduct("titulo2", "descripcion2", 1000, "imagen2", "abc123", 5); // Code repetition, should print an error
productos.addProduct("titulo3", "descripcion3", 1200, "imagen3", "xyz456", 8);
console.log(productos.getProduct());

productos.getProductById(1);