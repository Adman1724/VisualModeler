﻿const DEFAULT_NAME = "Unnamed";
var posX = 0;
var posY = 0;
class ClassObject {
    constructor(posX, posY, width, name, extendsBool, extendsText, id) {
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
       // /*this.canvas*/ = canvas;
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.strokeWidth = 2;
        this.group = new fabric.Group([], {
            top: this.previousPosY,
            left: this.previousPosX,
            width: this.width
        });
        this.id = id;
        this.arrayItemsText=[];
        this.arrayMetodsText=[];

    }
    mapper() {
        for (var i = 0; i < this.itemsArray.length; i++) {
            var a = this.itemsArray[i].getText()
            this.arrayItemsText.push(a);
        }
        for (var i = 0; i < this.metodsArray.length; i++) {
            this.arrayMetodsText.push(this.metodsArray[i].getText());
        }
        this.mapper = {
            posX: this.posX,
            posY: this.posY,
            type: this.type,
            typeConstructor: 'class',
            width: this.width,
            height: this.height,
            fontSizeName: this.fontSizeName,
            fontSizeExtends: this.fontSizeExtends,
            name: this.name,
            previousPosX: this.previousPosX,
            previousPosY: this.previousPosY,
            id: this.id,
            fontSize: this.fontSize,
            strokeWidth: this.strokeWidth,
            arrayMetodsText: this.arrayMetodsText,
            arrayItemsText: this.arrayItemsText
        }

    }
    loadMapper(obj) {
        this.posX = obj.posX;
        this.posY = obj.posY;
        this.type = obj.type;
        this.width = obj.width;
        this.height = obj.height;
        this.name = obj.name;
        this.previousPosX = obj.previousPosX;
        this.previousPosY = obj.previousPosY;
        this.id = obj.id;
        this.fontSize = obj.fontSize;
        this.strokeWidth = obj.strokeWidth;
        for (var i = 0; i < obj.arrayItemsText.length; i++) {
            
            var textItem = new fabric.Textbox(obj.arrayItemsText[i], {
                top: 0,
                left: 0,
                background: 'red',
                fontSize: this.fontSize,
                width: this.width,
                fixedWidth: this.width


            });
            this.itemsArray.push(textItem);
        }
        for (var i = 0; i < obj.arrayMetodsText.length; i++) {
            this.lenghtArrayItem();
            var textItem = new fabric.Textbox(obj.arrayMetodsText[i], {
                top: 0,
                left: 0,
                background: 'red',
                fontSize: this.fontSize,
                width: this.width,
                fixedWidth: this.width

            });
            this.metodsArray.push(textItem);
        }
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        this.group.width = this.previousWidth;

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
    this.draw();
  
    }
    changeName(text) {
        this.name = text;
        this.initObject();
        this.draw(/*this.canvas*/);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(/*this.canvas*/);
    }
    changeExtends(text) {
        this.extendsText = text;
        this.initObject();
        this.draw(/*this.canvas*/);
    }
 
    changeWidth(text) {
        this.width = parseInt(text);;
        this.initObject();
        this.draw(/*this.canvas*/);
    }
    changeFontSizeName(text) {
        this.fontSizeName = parseInt(text);;
        this.initObject();
        this.draw(/*this.canvas*/);
    }
    changeFontSizeExtends(text) {
        this.fontSizeExtends = parseInt(text);;
        this.initObject();
        this.draw(/*this.canvas*/);
    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);;
        this.initObject();
        this.draw(/*this.canvas*/);
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
        this.draw(/*this.canvas*/);
    }
    changeHeight(text) {

        this.header.height = parseInt(text);
        this.initObject();
        this.draw(/*this.canvas*/);
    }
    
    draw() {
       
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
        var groupHeight = groupHeader.height + groupBody.height + groupFooter.height;
        this.hitBoxArrayCoordinates = [
            { y: 0, x: 0 },
            { y: 0, x: this.width / 2-3 },
            { y: 0, x: this.width -7},
            { y: groupHeight / 2-3, x: this.width -7},
            { y: groupHeight - 7 - this.strokeWidth * 2, x: this.width-7 },
            { y: groupHeight - 7 - this.strokeWidth * 2, x: this.width / 2 - 7 },
            { y: groupHeight- 7  - this.strokeWidth*2, x: 0 },
            { y: groupHeight / 2-3, x: 0 }];
        this.hitBoxArray = [];
        for (var i = 0; i < 8; i++) {
            this.hitBoxArray[i] = new fabric.Circle({
                left: this.hitBoxArrayCoordinates[i].x,
                top: this.hitBoxArrayCoordinates[i].y,
                strokeWidth: 0.5,
                class:'pointer',
                radius: 1,
                fill: 'black',
                stroke: '#666'
            });
        }
        var groupHitBox = new fabric.Group(this.hitBoxArray, {
            top: 0,
            left: 0
        });


        this.group = new fabric.Group([groupHeader, groupBody, groupFooter, groupItems, groupMetods, groupHitBox], {
           
        });
        
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        
       

        
    }
}
