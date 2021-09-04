var i1, i2
var b1
var v1, v2
var answer
function setup() {
  createCanvas(400,400);
  answer=0
i1= createInput()
i2= createInput()
i1.position(10,50)
i2.position(200,50)
b1=createButton("add")
b1.mousePressed(addition)
b1.position(70,150)
}

function draw() 
{
  background(30);
v1= i1.value()
v2= i2.value()
console.log(answer)
}
function addition(){
  answer = v1+v2
}



