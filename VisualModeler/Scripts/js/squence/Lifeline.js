class Lifeline {
    constructor(posX, posY, height) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = 3;
     
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.lifeline1 = new fabric.Line([0, 0, 0, this.height], {
            fill: 'black',
            stroke: 'black',
            strokeDashArray: [5, 5],
            strokeWidth: 3
        });
       


    }
    draw(canvas) {

        this.group = new fabric.Group([this.lifeline1], {


        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
function createLifeline(canvas, array) {
    var four = new Lifeline(0,0,200);
    four.initObject();
    four.draw(canvas);
    array.push(four);


}