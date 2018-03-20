class Terminator {
    constructor(posX, posY, height) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = height;

        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.terminatorBig = new fabric.Circle({
            radius: this.height,
            fill: 'white',
            stroke: 'black',
            left: 0,
            top: 0,
            originX: 'center',
            originY: 'center'
        });
        this.terminatorSmall = new fabric.Circle({
            radius: this.height/1.5,
            fill: 'black',
            left: 0,
            top: 0,
            originX: 'center',
            originY: 'center'
        });



    }
    draw(canvas) {

        this.group = new fabric.Group([this.terminatorBig, this.terminatorSmall], {
            originX:'center',
            originY: 'center'

        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
function createTerminator(canvas, array) {
    var four = new Terminator(0, 0, 35);
    four.initObject();
    four.draw(canvas);
    array.push(four);


}