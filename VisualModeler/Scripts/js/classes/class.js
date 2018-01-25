
class ClassObject{
  constructor(posX, posY){
    this.posX=posX;
    this.posY=posY;
     this.header = new fabric.Rect({
    fill: 'white',
    stroke: 'black',
    strokeWidth: 2,
    originX: 'center',
    originY: 'center'

    });
     this.name = new fabric.Text('hello world', { originX: 'center',
  originY: 'center'
 });

    this.body= new fabric.Rect({
      left: 100,
      top: 150,
      fill: 'black',
      width: 100,
      height: 30
    });
     this.metods = new fabric.Rect({
    left: 100,
    top: 180,
    fill: 'red',
    width: 100,
    height: 50
    });

  }
draw(canvas){
  this.group1=new fabric.Group([ this.header,this.name ], {
  left: this.posX,
  top: this.posY,

});
   this.group = new fabric.Group([this.body, this.metods]);
   canvas.add(this.group1);
  canvas.add(this.group);
fabric.log('Normal SVG output: ', canvas.toSVG());
  }


}
var first=new ClassObject(100,100);
