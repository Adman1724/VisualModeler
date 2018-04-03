const DEFAULT_NAME = "Unnamed";
var posX = 0;
var posY = 0;
class ClassObject {
    constructor(posX, posY, width, name, extendsBool, extendsText,canvas, id) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.itemsArray = [];
        this.metodsArray = [];
        this.height = 50;
        this.fontSizeName = 17;
        this.fontSizeExtends = 13;
        this.fontSize = 15;
        this.type = 'class';
       
        this.extendsText = extendsText;
        this.canvas = canvas;
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.strokeWidth = 2;
        this.group = new fabric.Group([], {
            top: this.previousPosY,
            left: this.previousPosX,
            width: this.width
        });
        this.id = id;


    }
    initObject() {
       this.previousPosY= this.group.top;
       this.previousPosX = this.group.left;
       this.previousWidth = this.group.width;    
        this.header = new fabric.Rect({
           
            left: 0,
            top: 0,
            fill: 'white',
            width: this.width,
            height: this.fontSizeName +(( this.fontSizeExtends + (4 / 10 * this.fontSizeExtends))*2),
            stroke: 'black',
            strokeWidth: this.strokeWidth,
            originX: 'left',
            originY: 'top'
    });
        this.lenghtArrayItem();
        this.body = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'white',
            width: this.width,
            height: 10 + (this.lenght * this.fontSize),
            stroke: 'black',
            strokeWidth: this.strokeWidth,
            originX: 'left',
            originY: 'top'
        });
        this.lenghtArrayMetod();
        this.footer = new fabric.Rect({
                left: 0,
                top: 0,
                fill: 'white',
                width: this.width,
                height: 10 + (this.lenght * this.fontSize),
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                originX: 'left',
                originY: 'top'

        });
        
            this.extendsTextBox = new fabric.Textbox(this.extendsText, {
                width: this.width,
                top: 2 / 10 * this.fontSizeExtends,
                left: 0,
                fontSize: this.fontSizeExtends,
                textAlign: 'center'
            });

            this.nameText = new fabric.Textbox(this.name, {
                width: this.width,
                top: (4 / 10 * this.fontSizeExtends) + this.fontSizeExtends,
                left: 0,
                fontSize: this.fontSizeName,
                textAlign: 'center'
            });
        
        

        
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
        var textItem = new fabric.Textbox(text , {
        top:0,
        left: 0,
        background: 'red',
        fontSize: this.fontSize,
        width: this.width,
        fixedWidth: this.width
        
        
    });
    this.itemsArray.push(textItem);
    this.initObject();
    this.draw(this.canvas);
  
    }
    changeName(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeExtends(text) {
        this.extendsText = text;
        this.initObject();
        this.draw(this.canvas);
    }
 
    changeWidth(text) {
        this.width = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeFontSizeName(text) {
        this.fontSizeName = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeFontSizeExtends(text) {
        this.fontSizeExtends = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    addMetod(text) {
        this.lenghtArrayItem();
        var textItem = new fabric.Textbox(text , {
            top: 0,
            left: 0,
            background: 'red',
            fontSize: this.fontSize,
            width: this.width,
            fixedWidth: this.width
            
        });
        this.metodsArray.push(textItem);
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {

        this.header.height = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    
    draw(canvas) {
       
        var groupHeader = new fabric.Group([this.header, this.extendsTextBox, this.nameText], {
            top: 0,
            left: 0
        });
        
        
        var groupBody = new fabric.Group([this.body], {
            top: this.header.height,
            left:0
        });
        
        var groupFooter = new fabric.Group([this.footer], {
            top: this.header.height + this.body.height,
            left: 0
        });
       
        for (var i = 0; i < this.itemsArray.length; i++) {
            this.itemsArray[i].left = 5;
            this.itemsArray[i].top = (i * this.fontSize) + (this.fontSize / 5);
            this.itemsArray[i].width = this.width;
           
        }
       
        var groupItems = new fabric.Group(this.itemsArray, {
            top:groupBody.top + (this.fontSize / 5),
            left: 5,
            width: this.width

        });
       
        for (var i = 0; i < this.metodsArray.length; i++) {
            this.metodsArray[i].left = 5;
            this.metodsArray[i].top = (i * this.fontSize) + (this.fontSize / 5);
            this.metodsArray[i].width = this.width;
        }

        var groupMetods = new fabric.Group(this.metodsArray, {
            top: groupFooter.top + (this.fontSize / 5),
            left: 5,
            width: this.width

        });


        this.group = new fabric.Group([groupHeader, groupBody, groupFooter, groupItems, groupMetods], {
           
        });
        
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        
       

        
    }
}
