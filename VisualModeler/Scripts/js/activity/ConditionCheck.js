﻿class ConditionCheck {
    constructor(posX, posY, height, id) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = height;
        this.name = "ConditionCheck";
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.conditionCheckBox = new fabric.Rect({
            left: 0,
            top: 0,
            fill: 'white',
            width: this.width,
            height: this.height,
            stroke: 'black',
            strokeWidth: 2,
            originX: 'left',
            originY: 'top',
            angle: 45
        });



    }
    changeName(text) {
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
    draw(canvas) {

        this.group = new fabric.Group([this.conditionCheckBox], {


        });

        this.group.width = this.width*1.5;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
