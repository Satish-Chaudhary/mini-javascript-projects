class myclass {
    constructor(brand){
        console.log("this is constructor.");
        this.brand = brand;
    }
    start() {
        console.log("start car.");
    }
    stop() {
        console.log("stop! car.");
        
    }
    
    
};
let toyota = new myclass("toyota");

class parent{
    constructor(name){
        this.name = name;
    }
    marks(){
        console.log("passed");
        
    }
    age(){
        console.log("adult");
        
    }
}
class child extends parent{
    constructor(name){
        super(name);
    }
    book(){
        console.log("books");
        
    }
}
let onj = new child("kumar");
