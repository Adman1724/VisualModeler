const DEFAULT_NAME = "Unnamed";
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

    }
    initObject() {
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
            height: this.height + (this.lenght * 17),
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
                height: this.height - 20 + (this.lenght * 20),
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
    var textItem = new fabric.Textbox(text, {
        width: this.width,
        top: this.posY + this.height + (this.lenght * 17) + 3,
        left: this.posX,
        fontSize: 17,
        textAlign: 'left',
        fixedWidth: 150,
        originX: 'left',
        originY: 'top'
        
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
       
        this.group = new fabric.Group([groupHeader, groupBody, groupFooter], {
           
        });
        this.group2 = new fabric.Group(this.itemsArray, {
            left: this.body.left,
            top: this.body.top,
            width: this.body.width

        });
        /*this.lenghtArrayItem();
        for (var i = 0; i < this.lenght; i++) {
            canvas.add(this.itemsArray[i]);
        }*/

        
    }
}