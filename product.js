class Product{
    constructor(name,code,category,price,unitsInStok){
            this._name=name;
            this._code=code;
            this._category=category;
            this._price=price;
            this._unitsInStok=unitsInStok;
    }
     set name(name){
     this._name= name;
     } 
     get name(){
      return this._name;
     }
     set code(code){
      this._code=code;
     } 
     get code(){
      return this._code;
     }
     set category(category){
          this._category=category;
     } 
     get category(){
      return this._category;
      } 
     set price(price){
        this._price=price;
    } 
     get price(){
      return this._price;
    }
     set unitsInStok(unitsInStok){
      this._unitsInStok=unitsInStok;
 } 
     get unitsInStok(){
      return this._unitsInStok;
 }
   
   
}