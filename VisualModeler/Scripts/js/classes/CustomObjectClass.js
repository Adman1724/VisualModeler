var CustomClassObject = fabric.util.createClass(fabric.Object, {
    originX: 'center',
    originY: 'center',
    initialize: function (options) {
        options || (options = {});
        






        this.callSuper('initialize', options);       
    },
    _render: function (ctx) {
        if (this.loaded) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(
                -(this.width / 2) - this.H_PADDING,
                -(this.height / 2) - this.H_PADDING,
                this.width + this.H_PADDING * 2,
                this.height + this.V_PADDING * 2);
            ctx.drawImage(this.image, -this.width / 2, -this.height / 2);
        }
    }
});