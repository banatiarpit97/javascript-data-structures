var circle = {
    init:function(radius){
        this.radius = radius;
    },
    diamater:function(){
        return this.radius*2;
    }
}
var semicircle = Object.create(circle);
semicircle.area = function(){
    return ((3.14*this.radius*this.radius)/2);
}

var s1 = Object.create(semicircle);
s1.init(3);
console.log(s1.area());