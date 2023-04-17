class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.className = "card text-center mb-4";
    element.innerHTML = `
      <div class="card-body">
        <div class="productName">
        Product: <span title="${product.name}">${product.name}</span>
        </div>
        <strong>Price</strong>: ${product.price}
        <strong>Year</strong>: ${product.year}
        <a href="#" class="btn btn-info" name="update" >Update</a>
        <a href="#" class="btn btn-danger" name="delete" >Delete</a>
      </div>
    `;
    productList.appendChild(element);

    // CLEAN FORM
    this.resetForm();
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product deleted successfully", "info");
    }
  }

  updateProduct(element) {
    if (element.name === "update") {
      console.log(element.nodeName);
      // const productName = document.querySelector(".productName").title;
      // console.log(productName);
      console.log(document.querySelector(".productName").children[0].title);
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Display in DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");
    container.insertBefore(div, app);
    setTimeout(() => {
      div.remove();
      // document.querySelector(".alert").remove();
    }, 2000);
  }
}

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;
    // console.log(name, price, year);
    e.preventDefault();

    // CREATE PRODUCT
    const product = new Product(name, price, year);

    // GENERATE IU WITH OBJECT 'product'
    const ui = new UI();
    if (name === "" || price === "" || year === "") {
      return ui.showMessage("Complete fields please", "danger");
    }
    ui.addProduct(product);
    ui.showMessage("Product added successfully", "success");
  });

document.getElementById("product-list").addEventListener("click", function (e) {
  // console.log(e.target);
  const ui = new UI();
  ui.deleteProduct(e.target);
  ui.updateProduct(e.target);
});

// document.getElementById("product-form").addEventListener()
