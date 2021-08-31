const { Product } = require("./Product");

class Cart {
    constructor () {
        this.items = [];
    }

    add(product) {
        product = new Product({name, price, taxable});
        this.items.push(product.name);
    }

    getItemCount() {
        return this.items.length;
    }

    getTotalBeforeTax() {
        let price = 0;
        for (i = 0; i <= this.items.length; i++) {
            price += this.items[i];
        }
    }

    getTotalWithTax() {
        const total = this.getTotalBeforeTax += this.getTax;
        return total;
    }

    getTax() {
        const tax = this.getTotalWithTax - this.getTotalBeforeTax;
        return tax;
    }
}
module.exports = { Cart };