﻿class Activation {
    constructor(posX, posY, width, height, name) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
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
            strokeWidth: 2,
            originX: 'left',
            originY: 'top'
        });


    }
    draw(canvas) {

        this.group = new fabric.Group([this.head], {


        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
function createActivation(canvas, array) {
    var four = new Activation(200, 200, 30, 250, ':Object');
    four.initObject();
    four.draw(canvas);
    array.push(four);


}
