function dog(){
    this.tomatch = [];
}
dog.prototype.eat = function(cat){
    this.tomatch.push(cat);
}