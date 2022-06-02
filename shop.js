window.addEventListener('load', () => {
    initialization();
});
class shop{
    products = [Product];

    constructor(products){
        this.products = products;
        this.createTable(products);
    }
    addProduct(){
        let name = document.getElementById("name").value;
        let code = document.getElementById("code").value;
        let category = document.getElementById("category").options[select.selectedIndex].value;
        let price = document.getElementById("price").value;
        let unitsInStok = document.getElementById("unitsInStok").value;
        if(name == "" || code == "" || category == "" || price == "" || unitsInStok == ""){
            alert('pleaese enter all the data of product!');
        }
        let i = this.products.find((p) => p.code == code);
        if(i){
            alert("this code is already exsit, please change it!")
        }
        else{
            let newProduct = new Product(name,code,category,price,unitsInStok);
            this.products = [...this.products,newProduct];
            myShop.viewProduct(newProduct);
            alert('added successfully!');

        }
       
    }
    createTable(products){
        let table = document.createElement('table');
        document.getElementsByTagName('body')[0].appendChild(table);
        products.forEach(this.viewProduct);
    }
    viewProduct(product) {
            let table = document.querySelector("table");
            let template = document.querySelector('#productrow');
            let clone = template.content.cloneNode(true);
            let td = clone.querySelectorAll("td");
            td[0].textContent = product.name;
            td[1].textContent = product.code;
            td[2].textContent = product.category;
            td[3].textContent = product.price
            td[4].textContent = product.unitsInStok;
            td[5].addEventListener('click',function(){
            let rows = document.querySelectorAll('tr');
            rows.forEach((row) => {
                if( row.cells[1].innerHTML == product.code){
                    table.deleteRow(row.rowIndex);               
                }
            });
            let i = myShop.products.findIndex(p => p.code == product.code);
                myShop.products.splice(i,1);
            });
            td[6].addEventListener('click',function(){
                document.getElementById("edit").style.display = "inline-block";
                let editName = document.getElementById("editName");
                let editCode = document.getElementById("editCode");
                let editCategory = document.getElementById("editCategory");
                let editPrice = document.getElementById("editPrice");
                let editUnitsInStok = document.getElementById("editUnitsInStok");
                editName.value = product.name;
                editCode.value = product.code;
                editCategory.value = product.category;
                editPrice.value = product.price;
                editUnitsInStok.value = product.unitsInStok;
                editButton.addEventListener('click',function(){
                    let i = myShop.products.findIndex((p) => p.code == product.code);
                    myShop.products[i].name = editName.value;
                    myShop.products[i].code = editCode.value;
                    myShop.products[i].category = editCategory.value;
                    myShop.products[i].price = editPrice.value;
                    myShop.products[i].unitsInStok = editUnitsInStok.value;
                    td[0].textContent = editName.value;
                    td[1].textContent = editCode.value;
                    td[2].textContent = editCategory.value;
                    td[3].textContent = editPrice.value;
                    td[4].textContent = editUnitsInStok.value;
                    document.getElementById("edit").style.display = "none";  
                })
            });
            table.appendChild(clone);
    }
    filterByName(value){
        if (value && value.trim().length > 0){
            let subProducts = this.products.filter(ele => ele.name.includes(value))
            document.querySelector('table').remove();
            this.createTable(subProducts);
                }
    }
    filterByPrice(){
        let min = parseInt(document.getElementById("min").value);
        let max = parseInt(document.getElementById("max").value);
        document.getElementById("minValue").innerHTML = min;
        document.getElementById("maxValue").innerHTML = max;

        let subProducts = this.products.filter(prod => prod.price >= min && prod.price <= max);
                document.querySelector('table').remove();
                this.createTable(subProducts);
    }
    filterByCategory(){
        let select = document.getElementById('select');
        let category = select.options[select.selectedIndex].value;
        let subProducts = this.products.filter(prod => prod.category==category);
        document.querySelector('table').remove();
        this.createTable(subProducts);
    }
    outOfStock(){
        let subProducts = this.products.filter(prod => prod.unitsInStok == 0);
        document.querySelector('table').remove();
        this.createTable(subProducts);
    }
    almostOutOfStock(){
        let subProducts = this.products.filter(prod => prod.unitsInStok < 50);
        document.querySelector('table').remove();
        this.createTable(subProducts);
    }
    clear(){
        document.querySelector('table').remove();
        this.createTable(this.products);
    }
}
function initialization(){
myProducts = [];
p1 = new Product("Tomy watch","1","women's watch","100","1000");
p2 = new Product("elegant watch","2","men's watch","120","1000");
p3 = new Product("wooow","3","wall clock","64","500");
p4 = new Product(" wall clock","4","wall clock","70","30");

myProducts = [...myProducts,p1,p2,p3,p4];
myShop = new shop(myProducts);
}