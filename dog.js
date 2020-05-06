function dog(){
    this.tomatch = [];
}
dog.prototype.eat = function(cat){
    this.tomatch.push(cat);
}
dog.prototype.jump = function(){
    console.log("jumping........");
}