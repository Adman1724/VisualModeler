
var posX = 0;
var posY = 0;
class ArrowClass {
    constructor(posX, posY, width, name, canvas, id, typeHead,typeBody,typeFooter) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = 50;
        this.name = name;
        this.canvas = canvas;
       
        this.typeHead = typeHead;
        this.typeBody = typeBody;
        this.typeFooter = typeFooter;
        this.type = 'arrowClass';
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.group = new fabric.Group([], {
            left: this.previousPosX,
            top: this.previousPosY
        });
        this.leftId;
        this.leftObjectHitbox = 1;
        this.rightObjectHitbox = 1;
        this.rightId;
        this.leftSideX = this.posX;
        this.leftSideY = this.posY;
        this.rightSideX = this.posX + this.width;
        this.rightSideY = this.posY;
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth = 2;
        this.angle = 0;
        this.rightText = '0..*';
        this.leftText = '1..*';
        this.regiterListener();
    }
    initObject() {
        this.previousPosY = this.group.top;
        this.previousPosX = this.group.left;
        this.nameText = new fabric.Textbox(this.name, {

            top: 0,
            left: 0 ,
            fontSize: this.fontSize,
            textAlign: 'center'
        });
        if (this.typeHead == 'AB') {

            this.head = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: 30,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'black',
                angle: this.angle
            })
            this.endArrow = this.head.height;
            this.groupHeadArrow = new fabric.Group([this.head], {
                left: 0,
                top: 0
            })
        }
        else if (this.typeHead == 'NN') {
            this.groupHeadArrow = new fabric.Group([], {
                left: 0,
                top: 0,
                width: 0
            });
            this.endArrow = 0;
        }
        else if (this.typeHead == 'AR') {
            if (this.typeBody[0] == 'D') {
                this.typeLine = [5, 5];
            }
            else if (this.typeBody[0] == 'L') {
                this.typeLine = [0, 0];
            }
            this.head1 = new fabric.Line([0, this.height/4, this.height/2, 0], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.head2 = new fabric.Line([0, this.height/4, this.height/2, this.height/2], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.head3 = new fabric.Line([0, this.height/4, this.height/2, this.height/4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                strokeDashArray: this.typeLine
            });

            this.groupHeadArrow = new fabric.Group([this.head1, this.head2, this.head3], {
                left: 0,
                top: 0
            });
            this.endArrow = this.groupHeadArrow.height-3;
        }
        else if (this.typeHead == 'AW') {

            this.head = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: this.height/2,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'white',
                angle: this.angle
            })
            this.endArrow = this.head.height;
            this.groupHeadArrow = new fabric.Group([this.head], {
                left: 0,
                top: 0
            })
        }
        else if (this.typeHead == 'AG') {

            this.head1 = new fabric.Line([0, this.height / 4, this.height/2, 0], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.head2 = new fabric.Line([0, this.height / 4, this.height/2, this.height/2], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.head3 = new fabric.Line([this.height/2, 0, this.height, this.height/4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.head4 = new fabric.Line([this.height/2, this.height/2,  this.height, this.height / 4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.endArrow = this.height ;
            this.groupHeadArrow = new fabric.Group([this.head1, this.head2, this.head3, this.head4], {
                left: 0,
                top: 0
            })
            
        }
        else if (this.typeHead == 'AC') {

            this.head1 = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: this.height/2,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'black',
                angle: 90
            })
            this.head2 = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: this.height/2,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'black',
                angle: this.angle
            })
            this.endArrow = 2 * this.height;
            var groupHeadArrow1 = new fabric.Group([this.head1], {
                left: this.height/2,
                top: 0
            })
            var groupHeadArrow2 = new fabric.Group([this.head2], {
                left: 0,
                top: 0
            })

            this.groupHeadArrow = new fabric.Group([groupHeadArrow1, groupHeadArrow2], {
                left: 0,
                top: 0
            });
            this.endArrow = this.height;
        }
        if (this.typeBody[0] == 'D') {
            this.typeLine = [5, 5];
        }
        else if (this.typeBody[0] == 'L') {
            this.typeLine = [0, 0];
        }
        if (this.typeFooter == 'AR') {
            this.footerWidth = this.height/2;
        }
        else if (this.typeFooter == 'AG' || this.typeFooter == 'AC') {
            this.footerWidth = this.height;
        }
        else if (this.typeFooter == 'AB' || this.typeFooter == 'AW') {
            this.footerWidth = this.height/2;

        }
        else {
            this.footerWidth = 0;}
       

        this.body1Line = new fabric.Line([0, 0, (this.width - this.endArrow - this.nameText.width - this.footerWidth) / 2, 0], {
            fill: 'black',
            stroke: 'black',
            strokeDashArray: this.typeLine,
            strokeWidth: this.strokeWidth 
        });
        if (this.typeBody[1] == 'D') {
            this.typeLine = [5, 5];
        }
        else if (this.typeBody[1] == 'L') {
            this.typeLine = [0, 0];
        }
        this.body2Line = new fabric.Line([this.body1Line.width + this.nameText.width, 0, (this.body1Line.width + this.nameText.width) + this.body1Line.width, 0], {
            fill: 'black',
            stroke: 'black',
            strokeDashArray: this.typeLine,
            strokeWidth: this.strokeWidth 
        });
       
        this.nameText = new fabric.Textbox(this.name, {

            top: 0-this.fontSize/2,
            left: this.body1Line.width ,
            fontSize: this.fontSize,
            textAlign: 'center'
        });
        this.groupBody = new fabric.Group([this.body1Line, this.nameText, this.body2Line], {
            left: this.endArrow,
            top: (this.height/2 - this.fontSize) / 2
        })
       
        if (this.typeFooter == 'AB') {

            this.footer = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: 30,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'black',
                angle: 90
            })

            this.groupFooterArrow = new fabric.Group([this.footer], {
                left: this.groupHeadArrow.width + this.groupBody.width,
                top: 0
            })
        }
        else if (this.typeFooter == 'AR') {
            this.footer1 = new fabric.Line([0, 0, this.height/2, this.height / 4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.footer2 = new fabric.Line([0,this.height/2, this.height/2, this.height / 4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.footer3 = new fabric.Line([0, this.height/4, this.height/2, this.height / 4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                strokeDashArray: this.typeLine
            });

            this.groupFooterArrow = new fabric.Group([this.footer1, this.footer2, this.footer3], {
                left: this.groupHeadArrow.width + this.groupBody.width - this.strokeWidth,
                top: 0
            });
        }
        else if (this.typeFooter == 'AW') {

            this.footer = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: this.height/2,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'white',
                angle: 90
            })

            this.groupFooterArrow = new fabric.Group([this.footer], {
                left: this.groupHeadArrow.width + this.groupBody.width,
                top: 0
            });
        }
        else if (this.typeFooter == 'AG') {

            this.footer1 = new fabric.Line([0, this.height / 4, this.height/2, 0], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.footer2 = new fabric.Line([0, this.height / 4, this.height/2, this.height/2], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.footer3 = new fabric.Line([this.height/2, 0,  this.height, this.height / 4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });
            this.footer4 = new fabric.Line([this.height/2, this.height/2,  this.height, this.height / 4], {
                fill: 'black',
                stroke: 'black',
                strokeWidth: this.strokeWidth
            });

            this.groupFooterArrow = new fabric.Group([this.footer1, this.footer2, this.footer3, this.footer4], {
                left: this.groupHeadArrow.width + this.groupBody.width,
                top: 0
            });

        }
        else if (this.typeFooter == 'AC') {

            this.footer1 = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: this.height/2,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'black',
                angle: 90
            })
            this.footer2 = new fabric.Triangle({
                top: 0,
                left: 0,
                width: this.height/2,
                height: this.height/2,
                stroke: 'black',
                strokeWidth: this.strokeWidth,
                fill: 'black',
                angle: this.angle
            })

            var groupFooterArrow1 = new fabric.Group([this.footer1], {
                left: this.height/2,
                top: 0
            })
            var groupFooterArrow2 = new fabric.Group([this.footer2], {
                left: 0,
                top: 0
            })

            this.groupFooterArrow = new fabric.Group([groupFooterArrow1, groupFooterArrow2], {
                left: this.groupHeadArrow.width + this.groupBody.width,
                top: 0
            });
            this.endArrow = this.height;
        }
        else if (this.typeFooter == 'NN') {
            this.groupFooterArrow = new fabric.Group([], {
                left: this.groupHeadArrow.width + this.groupBody.width,
                top: 0,
                width: 0
            });
        }
        this.rightTextBox = new fabric.Textbox(this.rightText, {

            top: -15,
            left: this.width-10,
            fontSize: this.fontSize,
            textAlign: 'center',
            originX: 'right',
            originY: 'top'
        });
        this.leftTextBox = new fabric.Textbox(this.leftText, {

            top: -15,
            left: 50,
            fontSize: this.fontSize,
            textAlign: 'center',
            originX: 'left',
            originY: 'top'
        });
        this.groupText = new fabric.Group([this.leftTextBox, this.rightTextBox], {
            left: 0,
            top: 0,

            width: this.width
        });



    }
    changeFontSize(text) {
        this.fontSize = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeName(text) {
        this.name = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeStrokeWidth(text) {
        this.strokeWidth =parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeLeftAssociation(text) {
        this.leftText = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeRightAssociation(text) {
        this.rightText = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeHeight(text) {
        this.height = parseInt(text);
        this.initObject();
        this.draw(this.canvas);
    }
    changeWidth(text) {
        //this.width = parseInt(text);;
        //this.initObject();
        //this.draw(this.canvas);
    }
    changeLeftArrow(text) {
        this.typeHead = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeRightArrow(text) {
        this.typeFooter = text;
        this.initObject();
        this.draw(this.canvas);
    }
    changeLineArrow(text) {
        this.typeBody = text;
        this.initObject();
        this.draw(this.canvas);
    }

    changeLeftId(id) {
        var hitbox = 5;
        this.leftId = id;
        this.recalculateLeft();
    }


  
    recalculateLeft() {

         for (var i = 0; i<canvasItems.length; i++) {
             if (canvasItems[i].id == this.leftId) {

                 var xOffset = canvasItems[i].hitBoxArrayCoordinates[this.leftObjectHitbox].x;
                 var yOffset = canvasItems[i].hitBoxArrayCoordinates[this.leftObjectHitbox].y;
                 this.leftSideX = canvasItems[i].previousPosX + xOffset;
                 this.leftSideY = canvasItems[i].previousPosY + yOffset;
                 break;
             }
        }

        var p1 = { x: this.leftSideX, y: this.leftSideY };
        var p2 = { x: this.rightSideX, y: this.rightSideY };
        var a = p1.x - p2.x;
        var b = p1.y - p2.y;

        var lenght = Math.sqrt(a * a + b * b);
       // debugger;
        this.angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        this.width = lenght;
        this.previousPosX = this.leftSideX;
        this.previousPosY = this.leftSideY;
        this.group.setTop(this.leftSideY);
        this.group.setLeft(this.leftSideX);
        this.group.setWidth = lenght;
        this.group.setAngle(this.angle);
        this.group.setCoords();
        this.canvas.renderAll();
        this.draw(this.canvas);
        this.group.setCoords();
        this.canvas.renderAll();
        this.initObject();
        this.draw(this.canvas);
        this.canvas.trigger('object:modified', { target: this.group });     
       

    }

   


    changeRightId(id) {
        this.rightId = id;
        this.recalculateRight();
    }

    recalculateRight() {
        for (var i = 0; i < canvasItems.length; i++) {
            if (canvasItems[i].id == this.rightId) {
                
                var xOffset = canvasItems[i].hitBoxArrayCoordinates[this.rightObjectHitbox].x;
                var yOffset = canvasItems[i].hitBoxArrayCoordinates[this.rightObjectHitbox].y;
                this.rightSideX = canvasItems[i].previousPosX + xOffset;
                this.rightSideY = canvasItems[i].previousPosY + yOffset;
                break;
            }
        }

        var p1 = { x: this.leftSideX, y: this.leftSideY };
        var p2 = { x: this.rightSideX, y: this.rightSideY };
        var a = p1.x - p2.x;
        var b = p1.y - p2.y;

        var lenght = Math.sqrt(a * a + b * b);
       
        this.angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        this.width = lenght;
        this.previousPosX = this.leftSideX;
        this.previousPosY = this.leftSideY;
        this.group.setTop(this.leftSideY);
        this.group.setLeft(this.leftSideX);
        this.group.setWidth = lenght;
        this.group.setAngle(this.angle);
        this.group.setCoords();
        this.canvas.renderAll();
        this.draw(this.canvas);
        this.group.setCoords();
        this.canvas.renderAll();
        this.initObject();
        this.draw(this.canvas);
       this.canvas.trigger('object:modified', { target: this.group });


    }

    changeLeftHitboxs(val) {
        //todo this.lefthitbox....
        this.leftObjectHitbox = val;
       this.recalculateLeft();
    }

    changeRightHitboxs(val) {
        //todo this.rightthitbox....
        this.rightObjectHitbox = val;
        this.recalculateRight();
    }



    draw(canvas) {
        this.groupArrow = new fabric.Group([this.groupHeadArrow, this.groupFooterArrow, this.groupBody], {
            left: 0,
            top: -50,
            angle:0   
        });
        

       

        this.group = new fabric.Group([this.groupArrow, this.groupText], {
          
        });
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;
        this.group.angle = this.angle;
        this.group.hasRotatingPoint = false;
        this.group.lockMovementX = true;
        this.group.lockMovementY = true;


    }

    regiterListener() {

        this.canvas.on("mouse:up", function (e) {
            var selected = canvas.getActiveObject();
            for (var i = 0; i < canvasItems.length; i++) {
                if (canvasItems[i].type == "arrowClass") {
                    canvasItems[i].recalculateLeft();
                    // debugger;

                    canvasItems[i].recalculateRight();
                    console.log('mouse up on ' + canvasItems[i].type);
                    //e.target.setSelected(true);
                    //this.canvas.add(e.target);
                    //registeredListener = true;


                }
            }
            // for (var i = 0; i < canvasItems.length; i++) {
            //     if (canvasItems[i].group == selectedObject) {
            if (selected != null) {
                canvas.setActiveObject(selected);
            }
            //  }
            //   }
        });

    }
}