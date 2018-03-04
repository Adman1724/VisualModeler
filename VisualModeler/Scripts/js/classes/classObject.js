const DEFAULT_NAME = "Unnamed";
var posX = 0;
var posY = 0;
class ClassObject {
    constructor(posX, posY, width, name, extendsBool, extendsText,canvas) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.itemsArray = [];
        this.metodsArray = [];
        this.height = 50;
        this.extends = extendsBool;
        this.extendsText = extendsText;
        this.canvas = canvas;
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.group = new fabric.Group([], {});


    }
    initObject() {
       this.previousPosY= this.group.top;
       this.previousPosX= this.group.left;
        this.header = new fabric.Rect({
           
            left: this.posX,
            top: this.posY,
            fill: 'white',
            width: this.width,
            height: this.height,
            stroke: 'black',
            strokeWidth: 2,
            originX: 'left',
            originY: 'top'
    });
        this.lenghtArrayItem();
        this.body = new fabric.Rect({
            left: this.posX,
            top: this.posY + this.header.height,
            fill: 'white',
            width: this.width,
            height: 25 + (this.lenght * 15),
            stroke: 'black',
            strokeWidth: 2,
            originX: 'left',
            originY: 'top'
        });
        this.lenghtArrayMetod();
        this.footer = new fabric.Rect({
                left: this.posX,
                top: this.posY + this.header.height + this.body.height,
                fill: 'white',
                width: this.width,
                height: 25 + (this.lenght * 15),
                stroke: 'black',
                strokeWidth: 2,
                originX: 'left',
                originY: 'top'

        });
        if (!this.extends) {
            this.extendsTextBox = new fabric.Textbox(this.extendsText, {
                width: this.width,
                top: this.header.top + ((this.header.height - 17) / 2)-15,
                left: this.posX,
                fontSize: 13,
                textAlign: 'center'
            });

            this.nameText = new fabric.Textbox(this.name, {
                width: this.width,
                top: this.header.top + ((this.header.height - 17) / 2),
                left: this.posX,
                fontSize: 17,
                textAlign: 'center'
            });
        }
        else {
            this.nameText = new fabric.Textbox(this.name, {
                width: this.width,
                top: this.header.top + ((this.header.height - 17)- 5),
                left: this.posX,
                fontSize: 17,
                textAlign: 'center',
                fixedWidth: 150
            });


        }

        
    }

    lenghtArrayItem(){
    
        if (typeof this.itemsArray[0] != null && this.itemsArray[0] !== 'undefined') {
        this.lenght = this.itemsArray.length;
        }
        else {
            this.lenght = 0;
        }
    }

    lenghtArrayMetod(){
         if (typeof this.metodsArray[0] != null && this.metodsArray[0] !== 'undefined') {
                 this.lenght = this.metodsArray.length;
            }
         else {
            this.lenght = 0;
             }
    }

    
    addItem(text){
        this.lenghtArrayItem();
        var textItem = new fabric.Textbox(text + this.lenght, {
        top:posY,
        left: 0,
        background: 'red',
        fontSize: 17,
        width: this.width,
        // textAlign: 'left',
        fixedWidth: this.width
        //originX: 'left',
        //originY: 'top'
        
    });
    this.itemsArray.push(textItem);
   
    this.initObject();
    this.draw(this.canvas);
    
        
    }
    
    draw(canvas) {
       
        var groupHeader = new fabric.Group([this.header, this.extendsTextBox, this.nameText], {

        });
        
        
        var groupBody = new fabric.Group([this.body], {

        });
        
        var groupFooter = new fabric.Group([this.footer], {

        });
        for (var i = 0; i < this.itemsArray.length; i++) {
            this.itemsArray[i].left = 0;
            this.itemsArray[i].top = this.height + (i * 15) + 3;
        }

        var groupItems = new fabric.Group(this.itemsArray, {


        });


        this.group = new fabric.Group([groupHeader, groupBody, groupFooter, groupItems], {
           
        });
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        
        /*this.lenghtArrayItem();
        for (var i = 0; i < this.lenght; i++) {
            canvas.add(this.itemsArray[i]);
        }*/

        
    }
}