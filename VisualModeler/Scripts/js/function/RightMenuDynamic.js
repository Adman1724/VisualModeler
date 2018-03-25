function addRightMenuItem() {

    $.ajax({
        url: "../../Content/Pattern/ClassObject.html",
        type: "get",
        async: false,
        success: function (data) {
            $("#rightMenuScrollInsert").append(data);
        }   
    });
} 
function changeId(id, item) {
    //var x = document.getElementById("classObjectS").id;
    //x = id.toString();
    $('#classObjectS').prop('id', id); 
    $('#classObjectString').prop('id', id+"s");
    //var b = $('#' + id);
    //var y = document.getElementById("classObjectString").id;
   // y = id + 's';
    $('#classObjectName').prop('id', id + "name");
    $('#classObjectExtends').prop('id', id + "extends");
    $('#itemTextAdd').prop('id', id + "addItem");
    $('#itemsList').prop('id', id + "itemsList");
    $('#metodTextAdd').prop('id', id + "addMetod");
    $('#metodsList').prop('id', id + "metodsList");
    $('#addItem').prop('id', id + "addItemButton");
    $('#removeItem').prop('id', id + "removeItemButton");
    $('#addMetod').prop('id', id + "addMetodButton");
    $('#removeMetod').prop('id', id + "removeMetodButton");
   $('#' + id + 's').attr("href", '#'+id)
   $('#' + id + "s").html(item.name);
 

}
function addItem(clickedId) {
    if (clickedId.length == 14) {
        var id = parseInt(clickedId[0]);
    }
    else if (clickedId.length == 15) {
        var idString = clickedId.substr(0, 1);
        var id = parseInt(idString);
    }
    else if (clickedId.length == 16) {
        var idString = clickedId.substr(0, 2);
        var id = parseInt(idString);
    }
    var count=0;
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].addItem($('#' + id + "addItem").val());
            count = canvasItems[i].itemsArray.length;
        }

    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
    $.ajax({
        url: "../../Content/Pattern/option.html",
        type: "get",
        async: false,
        success: function (data) {
            $("#"+id+"itemsList").append(data);
        }
    });
    $('#optionList').prop('id', id + "optionList"+ count);
    $('#' + id + "optionList" + count).html($('#' + id + "addItem").val());
    $('#' + id + "addItem").val('');

}
function findOutId(idString, count) {
    if (idString.length == count+1) {
        var id = parseInt(idString[0]);
    }
    else if (idString.length == count + 2) {
        var idString1 = idString.substr(0, 1);
        var id = parseInt(idString1);
    }
    else if (idString.length == count + 3) {
        var idString1 = idString.substr(0, 2);
        var id = parseInt(idString1);
    }
    return id;
}
function addMetod(clickedId) {
    if (clickedId.length == 14) {
        var id = parseInt(clickedId[0]);
    }
    else if (clickedId.length == 15) {
        var idString = clickedId.substr(0, 1);
        var id = parseInt(idString);
    }
    else if (clickedId.length == 16) {
        var idString = clickedId.substr(0, 2);
        var id = parseInt(idString);
    }
    var count = 0;
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].addMetod($('#' + id + "addMetod").val());
            count = canvasItems[i].metodsArray.length;
        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
    $.ajax({
        url: "../../Content/Pattern/option.html",
        type: "get",
        async: false,
        success: function (data) {
            $("#" + id + "metodsList").append(data);
        }
    });
    $('#optionList').prop('id', id + "optionList" + count);
    $('#' + id + "optionList" + count).html($('#' + id + "addMetod").val());
    $('#' + id + "addMetod").val('');

}
function changeName(clickedId) {
    var id = findOutId(clickedId, 4);
   
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeName($('#' + id + "name").val());
            
        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
    $('#' + id + "s").html($('#' + id + "name").val());
}
function changeExtends(clickedId) {
    var id = findOutId(clickedId, 7);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeExtends($('#' + id + "extends").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
    
}
