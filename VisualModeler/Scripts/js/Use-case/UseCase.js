class UseCase {
    constructor(posX, posY, width, name) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.head = new fabric.Circle({
            
            strokeWidth: 3,
            scaleY: 0.5,
            radius: 100,
            fill: '#fff',
            stroke: '#000',
            originX: 'center',
            originY: 'center'
        });

       
        this.nameText = new fabric.Textbox(this.name, {
            

            fontSize: 17,
            originX: 'center',
            originY: 'center'
        });
    }
    draw(canvas) {
        
        this.group = new fabric.Group([this.head, this.nameText], {
            left: this.previousPosX,
            top: this.previousPosY
        });

        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}
function createUsecase(canvas, array) {
    var four = new UseCase(200, 200, 200, 'Title');
    four.initObject();
    four.draw(canvas);
    array.push(four);


}