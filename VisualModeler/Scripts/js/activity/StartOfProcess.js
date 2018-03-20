class StartOfProcess {
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
        this.startOfProcessBox = new fabric.Circle({
            radius: this.height,
            fill: 'black',
            left: 0,
            top: 0
        });



    }
    draw(canvas) {

        this.group = new fabric.Group([this.startOfProcessBox], {


        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;



    }
}
function createStartOfProcess(canvas, array) {
    var four = new StartOfProcess(0, 0, 35);
    four.initObject();
    four.draw(canvas);
    array.push(four);


}