fabric.Tag = fabric.util.createClass(fabric.Group, {
    type: 'PItag',

    initialize: function () {

        options = {};
        options.left = 100;
        options.top = 100;

        var defaults = {
            width: 100,
            height: 40,
            originX: 'center',
            originY: 'center'
        };

        var defaults1 = {
            width: 100,
            height: 20,
            originX: 'center',
            originY: 'top',
            top: -20,
            backgroundColor: 'red'
        };

        var defaults2 = {
            width: 100,
            height: 20,
            originX: 'center',
            originY: 'top',
            top: 0
        };

        var items = [];

        items[0] = new fabric.Rect($.extend({}, defaults, {
            fill: '#77AAFF',
        }));

        items[1] = new fabric.Textbox('PI tag name', $.extend({}, defaults1, {
            textAlign: 'center',
            fontSize: 14
        }));

        items[2] = new fabric.IText('####', $.extend({}, defaults2, {
            textAlign: 'center',
            fontSize: 16
        }));

        this.callSuper('initialize', items, options);

    },

    getTagName: function () {
        return this._objects[1].text;
    },

    setTagName: function (value) {
        this._objects[1].text = value;
    },

    getValue: function () {
        return this._objects[2].text;
    },

    setValue: function (value) {
        this._objects[2].set({ text: value });
        this.canvas.renderAll();
    },

    _render: function (ctx, noTransform) {

        console.log('xs')
        this.callSuper('_render', ctx);
        //ctx._objects[1].text = this._objects[1].text;

    }

});