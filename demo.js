function cat(name){
    this.name = name;
    this.tomatch = [];
}
cat.prototype.eat = function(mouse){
    this.tomatch.push(mouse);
}