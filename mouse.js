function mouse(name, weigth){
    this.name = name;
    this.weigth= weigth;
}

mouse.prototype.jump = function(){
    console.log("jumping.............!!!");
}
mouse.prototype.run = function(){
    console.log("running.........!!!");

}