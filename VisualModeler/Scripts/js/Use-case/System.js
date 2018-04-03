﻿class System {
    constructor(posX, posY, width, height, name, id) {
        this.posX = posX;
        this.type = 'usecase';
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth=2
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
       
        this.head = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'white',
            width: this.width,
            height: this.height,
            stroke: 'black',
            strokeWidth: this.strokeWidth,
            originX: 'left',
            originY: 'top'
        });


        this.nameText = new fabric.Textbox(this.name, {
            left: 5,
            top: 5,
            fontSize: this.fontSize
            
        });
    }
    changeTitle(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {
        this.height = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeWidth(text) {
        this.width = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    draw(canvas) {
        this.group1 = new fabric.Group([this.head, this.nameText], {


        });

        this.group = new fabric.Group([this.group1], {
           
            
        });

        //this.group.width = this.width;
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        


    }
}
