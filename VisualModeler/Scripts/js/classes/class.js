const DEFAULT_NAME = "Unnamed";
class ClassObject{
    constructor(posX, posY, width,height,name) {
        this.posX=posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name;
        this.itemsArray = [0];
        this.metodsArray = [0];
        this.header = null;
        this.body = null;
        this.metods = null;
        this.extends = false;
        this.headerType = 1;
        this.metodsType = 1;
        this.bodyType = 1;
        this.extendsText = null;
        this.generateHeader();
        this.name = new fabric.Text(name, { 
            fontSize: 20,
            originX: 'center',
            originY: 'center'
        });
        this.generateBody();
        this.generateMetods();



        
       

    }
    generateHeader() {
        if (this.headerType == 1) {
            this.header = new fabric.Rect({
                width: this.width,
                height: this.height,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2,
              originX: 'center'
              


            });
        }
        else {
            this.header = new fabric.Rect({
                width: this.width,
                height: this.height+40,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2,
                originX: 'center'
                


            });
        }
    }
    generateMetods() {
        if (this.metodsType == 1) {
            this.metods = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height + this.body.height,
                width: this.width,
                height: this.height + (this.metodsArray.length*20),
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2

            });
        }
        else {
            this.metods = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height + this.body.height,
                width: this.width,
                height: this.height + (this.metodsArray.length * 20)+20,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2

            });
        }
    }
    generateBody() {
        if (this.bodyType == 1) {
            this.body = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height ,
                width: this.width,
                height: this.height + (this.itemsArray.length * 20),
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2

            });
        }
        else {
            this.body = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height ,
                width: this.width,
                height: this.height + (this.itemsArray.length * 20) + 20,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2

            });
        }
    }
    
    draw(canvas) {
        this.group1 = new fabric.Group([this.header, this.name, this.extendsText], {
            left: this.posX,
            top: this.posY,
        });
        
        this.group2 = new fabric.Group([this.body, this.metods,]);

        this.group = new fabric.Group([this.group1, this.group2]);
        canvas.add(this.group);
        //fabric.log('Normal SVG output: ', canvas.toSVG());
    }
    addItem() {
        
        var text = new fabric.Text('hello world', { left: 100, top: 100 });
        canvas.add(text);



    }
    addExtends(text) {
       
        if (!this.extends) {

            this.headerType = 2;
            this.bodyType = 2;
            this.metodsType = 2;
            this.generateHeader();
            this.generateBody();
            this.generateMetods();
            this.extends = true;
        }
        this.extendsText = new fabric.Text(text, {
            fontSize: 15,
            originX: 'center',
            top:  10
        });
        var helpName = this.name.getText();
        this.name = new fabric.Text(helpName, {
            fontSize: 20,
            originX: 'center',
            top: 30
        });


    }


}
var first = new ClassObject(100, 100, 200, 50, DEFAULT_NAME);

