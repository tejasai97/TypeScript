class SweetSweetBasil {
  color:string;
  constructor(name:string,startColor:string){
    console.log("hello "+name)
    this.color = startColor
  }
  getColor(){
    console.log(this.color)
  }
}
let basil = new SweetSweetBasil('teja','bright green')

basil.getColor()

console.log(basil.color)

class Basil extends SweetSweetBasil{
  constructor(name:string,startColor:string){
    super(name,startColor)
  }
  setNewColor(newcolor:string){
    this.color=newcolor
  }
}


let basil2= new Basil("basil","blue")

basil2.getColor()
basil2.setNewColor("red")
basil2.getColor()
