const DEFAULT_NAME1 = "Unnamed";
class ClassObject1{
    constructor(posX, posY, width,height,name) {
        this.posX=posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.name = name;
        this.itemsArray = [];
        this.metodsArray = [];
        this.header = null;
        this.body = null;
        this.metods = null;
        this.extends = false;
        this.headerType = 1;
        this.metodsType = 1;
        this.bodyType = 1;
        this.extendsText = null;
        this.generateHeader();
        this.group = null;
        this.name = new fabric.Text(name, { 
            top: this.posY,
            left: this.posX,
            fontSize: 20
            
        });
        this.generateBody();
        this.generateMetods();



        
       

    }
    generateHeader() {
        if (this.headerType == 1) {
            this.header = new fabric.Rect({
                top: this.posX,
                left: this.posY,
                width: this.width,
                height: this.heigh+10,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2
              
              


            });
        }
        else {
            this.header = new fabric.Rect({
                top: this.posX,
                left: this.posY,
                width: this.width,
                height: this.height+20,
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2
                
                


            });
        }
    }
    generateMetods() {
        var lenght;
        if (typeof this.metodsArray[0] != null && this.metodsArray[0] !== 'undefined' ) {
            lenght = this.metodsArray.length;
           
        }
        else {
            lenght = 0;
        }
        if (this.metodsType == 1) {
            this.metods = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height + this.body.height,
                width: this.width,
                height: this.height-20 + (lenght*20),
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
                height: this.height-20 + (lenght * 20),
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2

            });
        }
    }
    generateBody() {
        var lenght;
       if (typeof this.itemsArray[0] != null && this.itemsArray[0] !== 'undefined' ) {
            lenght = this.itemsArray.length;
        }
        else {
            lenght = 0;
            
        }
       
       this.body = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height,
                width: this.width,
                height: this.height + (lenght * 17),
                fill: 'white',
                stroke: 'black',
                strokeWidth: 2
                

        });
           
        
       
    }
    generateClass() {
        this.generateHeader();
        this.generateBody();
        this.generateMetods();
    }
    draw(canvas) {
   
       
        canvas.add(this.group);
        this.canvas = canvas;
        //fabric.log('Normal SVG output: ', canvas.toSVG());
    }
    addItem(text) {
        if (typeof this.itemsArray[0] != null && this.itemsArray[0] !== 'undefined') {
            var item = new fabric.Text(text, {
                fontSize: 15,
                left: this.posX + 2,
                top: this.posY + this.header.height+(this.itemsArray.length * 17)
            });
            this.itemsArray.push(item);
            this.generateClass();
            this.group = new fabric.Group([this.body, this.header, this.metods, this.name], {
               
            });
            for (var i = 0; this.itemsArray.length > i; i++) {
                this.group.add(this.itemsArray[i]);
            }

        }
        else {
            var item = new fabric.Text(text, {
                fontSize: 15,
                top: this.posY + this.header.height ,
                left: this.posX+2,
            });
            this.itemsArray.add(item);
            this.generateClass();
            this.group = new fabric.Group([this.body, this.header, this.metods, this.name], {

            });
            
        }
        
        
        
        


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
            left: this.posX,
            top: this.posY + 10
           
           
        });
        var helpName = this.name.getText();
        this.name = new fabric.Text(helpName, {
            
            fontSize: 20,
            top: this.posY,
            left: this.posX
            
           
        });


    }


}


//var first = new ClassObject(100, 100, 200, 50, DEFAULT_NAME);

