class System {
    constructor(posX, posY, width, height, name) {
        this.posX = posX;
        this.type = 'system';
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


        this.nameText = new fabric.Textbox(this.name, {
            left: 5,
            top: 5,
            fontSize: 17
            
        });
    }
    draw(canvas) {

        this.group = new fabric.Group([this.head, this.nameText], {
           
            
        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        


    }
}
function createSystem(canvas, array) {
    var four = new System(200, 200, 200,200,'Title');
    four.initObject();
    four.draw(canvas);
    array.push(four);


}