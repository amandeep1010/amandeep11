

var a = prompt('enter A value');
var b = prompt('enter the second value')
function setup(){
  var b2 = createButton("click here to swap");
b2.mousePressed(swap)
  }


function draw()
{
}
function swap(){
[a,b]=[b,a]
console.log("the value of A after swapping",+a)
console.log("the value of B after swapping",+b)
}