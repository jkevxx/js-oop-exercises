// source video https://youtu.be/Ql6XJpZqM9E

const _private = new WeakMap();

class Book {
  constructor(title, author, price) {
    const properties = {
      _title: title,
      _author: author,
      _price: price,
    };

    _private.set(this, { properties });
  }

  get title() {
    return _private.get(this).properties['_title'];
  }
  set title(newTitle) {
    return (_private.get(this).properties['_title'] = newTitle);
  }

  get author() {
    return _private.get(this).properties['_author'];
  }
  set author(newAuthor) {
    return (_private.get(this).properties['_author'] = newAuthor);
  }

  get price() {
    return _private.get(this).properties['_price'];
  }

  set price(newPrice) {
    return (_private.get(this).properties['_price'] = newPrice);
  }

  getAllData() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`
    );
  }
}

class Comic extends Book {
  constructor(name, author, price, illustrators) {
    super(name, author, price);
    this.illustrators = illustrators;
  }

  addIllustrator(newIllustrator = []) {
    this.illustrators.push(newIllustrator);
  }

  getAllData() {
    super.getAllData();
    console.log(`Illustrators: ${this.illustrators}`);
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(amount, price) {
    this.products.push(...Array(amount).fill(price));
    // => ["", ""] => [21,23]
  }

  showProducts() {
    console.log(this.products);
  }

  calcTotal() {
    return this.products
      .map((price) => price)
      .reduce((ac, price) => ac + price, 0);
  }

  printTicker() {
    console.log(`Total: ${this.calcTotal()}`);
  }
}

const book1 = new Book('First Book', 'K.P', 80);

const comic1 = new Comic('The killing joker', 'L.M', 20, ['illustrator x']);

console.log(comic1.illustrators);
comic1.addIllustrator('illus y');
console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);

cart.showProducts();

cart.printTicker();
book1.getAllData();
comic1.getAllData();
