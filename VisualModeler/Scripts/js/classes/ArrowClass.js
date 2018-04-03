
var posX = 0;
var posY = 0;
class ArrowClass {
    constructor(posX, posY, width, name, canvas, id, typeHead,typeBody,typeFooter) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = 50;
        this.name = name;
       
        this.typeHead = typeHead;
        this.typeBody = typeBody;
        this.typeFooter = typeFooter;
        this.type = 'arrowClass';
        this.group = new fabric.Group([], {});
        this.previousPosY = posY;
        this.previousPosX = posX;
        this.id = id;
        this.fontSize = 17;
        this.strokeWidth = 2;
        this.angle = 270;
        this.rightText = '0..*';
        this.leftText = '1..*';
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

            top: 0,
            left: this.width-10,
            fontSize: this.fontSize,
            textAlign: 'center',
            originX: 'right',
            originY: 'top'
        });
        this.leftTextBox = new fabric.Textbox(this.leftText, {

            top: 0,
            left: 10,
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
        this.width = parseInt(text);;
        this.initObject();
        this.draw(this.canvas);
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

    draw(canvas) {
        this.groupArrow = new fabric.Group([this.groupHeadArrow, this.groupFooterArrow, this.groupBody], {
            left: 0,
            top: this.height/2
        });
        

       

        this.group = new fabric.Group([this.groupArrow, this.groupText], {
          
        });
        this.group.height = this.height;
        this.group.width = this.width;
        this.group.top = this.previousPosY;
        this.group.left = this.previousPosX;


    }
}