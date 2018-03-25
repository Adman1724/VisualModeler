class ObjectSeq {
    constructor(posX, posY, width, height, name, id) {
        this.posX = posX;
        this.type = 'object';
        this.posY = posY;
        this.width = width;
        this.name = name;
        this.height = height;
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
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
            width: this.width,
            top: (this.head.height - 17) / 2,
            left: 0,
            fontSize: 17,
            textAlign: 'center',
            textDecoration: 'underline'
           

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
