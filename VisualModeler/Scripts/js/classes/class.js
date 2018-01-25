const DEFAULT_NAME = "Unnamed";
class ClassObject{
    constructor(posX, posY, width,height,name) {
        this.posX=posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name;
        this.Items = [];
        this.header = new fabric.Rect({
            width: this.width,
            height: this.height,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2,
            originX: 'center',
            originY: 'center'
            

            });
        this.name = new fabric.Text(name, { 
            fontSize: 20,
            originX: 'center',
            originY: 'center'
        });

        this.body = new fabric.Rect({
            left: this.posX,
            top: this.posY + this.header.height,
            width: this.width,
            height: this.height-40,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2
          
         });
        this.metods = new fabric.Rect({
            left: this.posX,
            top: this.posY + this.header.height + this.body.height,
            width: this.width,
            height: this.height-40,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2
            
        });

    }
    
    draw(canvas) {
        this.group1 = new fabric.Group([this.header, this.name], {
            left: this.posX,
            top: this.posY,
        });
        this.group2 = new fabric.Group([this.body, this.metods,]);

        this.group = new fabric.Group([this.group1, this.group2]);
        canvas.add(this.group);
        //fabric.log('Normal SVG output: ', canvas.toSVG());
  }


}
var first=new ClassObject(100,100,200,50,DEFAULT_NAME);
