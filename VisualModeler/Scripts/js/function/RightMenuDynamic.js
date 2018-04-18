var ItemsListId;
function setItemsListId(id) {
    ItemsListId = id;
}
var MetodsListId;
function setMetodsListId(id) {
    MetodsListId = id;
}
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
function finddArrowAndReloadConnection() {
    for (var i = 0; i < canvasItems.length; i++) {
        if(canvasItems[i].type == 'arrowClass'){
            reloadConnectionList(canvasItems[i].id);
        }
    }
}
function addRelationItem(clickedId) {


}
function addRightMenuItemRelation() {

    $.ajax({
        url: "../../Content/Pattern/Relation.html",
        type: "get",
        async: false,
        success: function (data) {
            $("#rightMenuScrollInsert").append(data);
        }
    });
}
function addRightMenuItemActor() {
    $.ajax({
        url: "../../Content/Pattern/Actor.html",
        type: "get",
        async: false,
        success: function (data) {
            $("#rightMenuScrollInsert").append(data);
        }
    });
}
function changeIdActor(id, item) {
    $('#actorS').prop('id', id);
    $('#actorString').prop('id', id + "s");
    $('#actorName').prop('id', id + "name");
    $('#actorHeight').prop('id', id + "height");
    $('#actorWidth').prop('id', id + "width");
    $('#actorFontSize').prop('id', id + "fontSize");
    
    $('#' + id + 's').attr("href", '#' + id)
    $('#' + id + "s").html(item.name);
    $('#' + id + "height").val(item.height);
    $('#' + id + "width").val(item.width);
    $('#' + id + "name").val(item.name);
    $('#' + id + "fontSize").val(item.fontSize);
    $('#actorStrokeWidth').prop('id', id + "strokeWidth");
    $('#' + id + "strokeWidth").val(item.strokeWidth);

}
function addRightMenuItemUsecase() {
    $.ajax({
        url: "../../Content/Pattern/Usecase.html",
        type: "get",
        async: false,
        success: function (data) {
            $("#rightMenuScrollInsert").append(data);
        }
    });
}
function changeIdUsecase(id, item) {
    $('#usecaseS').prop('id', id);
    $('#usecaseString').prop('id', id + "s");
    $('#usecaseName').prop('id', id + "name");
    $('#usecaseHeight').prop('id', id+"height");
    $('#usecaseWidth').prop('id', id + "width");
    $('#usecaseFontSize').prop('id', id + "fontSize");
    $('#' + id + 's').attr("href", '#' + id)
    $('#' + id + "s").html(item.name);
    $('#' + id + "height").val(item.height);
    $('#' + id + "width").val(item.width);
    $('#' + id + "name").val(item.name);
    $('#' + id + "fontSize").val(item.fontSize);
    $('#usecaseStrokeWidth').prop('id', id + "strokeWidth");
    $('#' + id + "strokeWidth").val(item.strokeWidth);
    

}
function reloadRightMenu() {
    $("#rightMenuScrollInsert").html('');
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].type == 'usecase') {
            addRightMenuItemUsecase();
            changeIdUsecase(canvasItems[i].id, canvasItems[i]);
           
        }
        else if (canvasItems[i].type == 'actor') {
            addRightMenuItemActor();
            changeIdActor(canvasItems[i].id, canvasItems[i]);
        }
        else if (canvasItems[i].type == 'class') {
            addRightMenuItem();
            changeId(canvasItems[i].id, canvasItems[i]);
            reloadItemList(canvasItems[i].id, canvasItems[i]);
            reloadMetodList(canvasItems[i].id, canvasItems[i]);

        }
        else if (canvasItems[i].type == 'arrowClass') {
            addRightMenuItemRelation();
            changeIdRelation(canvasItems[i].id, canvasItems[i]);
        }
    }
    finddArrowAndReloadConnection();
}
function changeId(id, item) {
 
    $('#classObjectWidth').prop('id', id + "width");
    $('#classObjectS').prop('id', id); 
    $('#classObjectString').prop('id', id+"s");
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
    $('#classObjectFontSizeName').prop('id', id + "fontSizeName");
    $('#classObjectFontSizeExtends').prop('id', id + "fontSizeExtends");
    $('#classObjectFontSize').prop('id', id + "fontSize");

   $('#' + id + 's').attr("href", '#'+id)
   $('#' + id + "s").html(item.name);
   
   $('#' + id + "width").val(item.width);
   $('#' + id + "fontSizeName").val(item.fontSizeName);
   $('#' + id + "fontSizeExtends").val(item.fontSizeExtends);
   $('#' + id + "fontSize").val(item.fontSize);
   $('#' + id + "name").val(item.name);
   $('#' + id + "extends").val(item.extendsText);
   $('#classObjectStrokeWidth').prop('id', id + "strokeWidth");
   $('#' + id + "strokeWidth").val(item.strokeWidth);
 

}
function reloadItemList(id, item) {
    $("#" + id + "itemsList").html('');
    for (var i = 0; i < item.itemsArray.length; i++) {
        var x = item.itemsArray[i].getText();
        $("#" + id + "itemsList").append(' <option id="optionList" onclick="setItemsListId(this.id);"></option>');
        $('#optionList').prop('id', id + "optionListItem" + i);
        $('#' + id + "optionListItem" + i).html(x);
    }
    
    
}
function reloadConnectionList(relationId) {
    $('#' + relationId + "relationRightArrowConectionUl").html('');
    $('#' + relationId + "relationLeftArrowConectionUl").html('');
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].type != "arrowClass") {
            $('#' + relationId + "relationRightArrowConectionUl").append("<li><a href= 'javascript:void(0);'  id= '" + canvasItems[i].id + "_relationItem' onclick= \"changeRightRelationConnection(" + canvasItems[i].id + "," + relationId + ");\" >" + canvasItems[i].name + "</a ></li >")
            $('#' + relationId + "relationLeftArrowConectionUl").append("<li><a href= 'javascript:void(0);'  id= '" + canvasItems[i].id + "_relationItem' onclick= \"changeLeftRelationConnection(" + canvasItems[i].id + "," + relationId + ");\" >" + canvasItems[i].name + "</a ></li >")
        }
        if (canvasItems[i].type == 'arrowClass' && id == canvasItems[i].id) {
            if (canvasItems[i].leftId == null) {
            //if (canvasItems[canvasItems[i].leftId].name == null) {

                $('#' + relationId + "relationLeftArrowConection").html('None');
            }
            else { $('#' + relationId + "relationLeftArrowConection").html(canvasItems[canvasItems[i].leftId].name); }
            if (canvasItems[i].rightId == null) {
           // if (canvasItems[canvasItems[i].leftId].name == null) {
                $('#' + relationId + "relationRightArrowConection").html('None');
            }
            else {
                $('#' + relationId + "relationRightArrowConection").html(canvasItems[canvasItems[i].rightId].name);}
           
        }
    }
}
function reloadMetodList(id, item) {
    $("#" + id + "metodsList").html('');
    for (var i = 0; i < item.metodsArray.length; i++) {
        var x = item.metodsArray[i].getText();
        $("#" + id + "metodsList").append(' <option id="optionList" onclick="setMetodsListId(this.id);"></option>');
        $('#optionList').prop('id', id + "optionListMetod" + i);
        $('#' + id + "optionListMetod" + i).append(x);
    }


}
function removeItemClass(clickedId){
    var id = chooseItemClassId(clickedId);
    var count = chooseItemClassArrayId(clickedId);
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].itemsArray.splice(count, 1);
            canvasItems[i].initObject();
            canvasItems[i].draw(canvas)
            reloadItemList(id, canvasItems[i]);
        }
    }

    canvas.clear();
    canvasAdd(canvasItems, canvas);
   
        
}
function removeMetodClass(clickedId) {
    var id = chooseMetodClassId(clickedId);
    var count = chooseMetodClassArrayId(clickedId);
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].metodsArray.splice(count, 1);
            canvasItems[i].initObject();
            canvasItems[i].draw(canvas)
            reloadMetodList(id, canvasItems[i]);
        }
    }

    canvas.clear();
    canvasAdd(canvasItems, canvas);


}
function chooseItemClassId(clickedId) {
    var x;
    for (var i = 0; i < clickedId.length; i++) {
        if (clickedId[i] == 'o') {
            x = i;
            break;
        }

    }
    var idString1 = clickedId.substr(0, x );
    var id = parseInt(idString1);
    return id;

}
function chooseItemClassArrayId(clickedId) {
    var x;
    for (var i = 0; i < clickedId.length; i++) {
        if (clickedId[i] == 'o') {
            x = i;
            break;
        }

    }
    var idString1 = clickedId.substr(x + 14, clickedId.length - x + 14 );
    var id = parseInt(idString1);
    id = id - 1;
    return id;
    
}
function chooseMetodClassId(clickedId) {
    var x;
    for (var i = 0; i < clickedId.length; i++) {
        if (clickedId[i] == 'o') {
            x = i;
            break;
        }

    }
    var idString1 = clickedId.substr(0, x);
    var id = parseInt(idString1);
    return id;

}
function chooseMetodClassArrayId(clickedId) {
    var x;
    for (var i = 0; i < clickedId.length; i++) {
        if (clickedId[i] == 'o') {
            x = i;
            break;
        }

    }
    var idString1 = clickedId.substr(x + 15, clickedId.length - x + 15);
    var id = parseInt(idString1);
    id = id - 1;
    return id;

}
function changeIdRelation(id, item) {

    $('#relationWidth').prop('id', id + "width");
    $('#relationS').prop('id', id);
    $('#relationString').prop('id', id + "s");
    $('#relationName').prop('id', id + "name");
    $('#relationRightArrow').prop('id', id + "rightArrow");
    $('#relationRightArrowUl').prop('id', id + "rightArrowUl");
    $('#relationLineArrow').prop('id', id + "lineArrow");
    $('#relationLineArrowUl').prop('id', id + "lineArrowUl");
    $('#relationLeftArrow').prop('id', id + "leftArrow");
    $('#relationRightAssociationUl').prop('id', id + "rightAssociationUl");
    $('#relationRightAssociation').prop('id', id + "rightAssociationArrow");
    $('#relationLeftAssociationUl').prop('id', id + "leftAssociationUl");
    $('#relationLeftAssociation').prop('id', id + "leftAssociationArrow");
    $('#relationLeftArrowUl').prop('id', id + "leftArrowUl");
    $('#relationFontSize').prop('id', id + "fontSize");
    $('#relationStrokeWidth').prop('id', id + "strokeWidth");
    $('#elationHeight').prop('id', id + "height"); 
    $('#relationRightArrowConection').prop('id', id + 'relationRightArrowConection');
    $('#relationRightArrowConectionUl').prop('id', id + 'relationRightArrowConectionUl')
    $('#relationLeftArrowConection').prop('id', id + 'relationLeftArrowConection');
    $('#relationLeftArrowConectionUl').prop('id', id + 'relationLeftArrowConectionUl');
    $('#relationLeftArrowConectionHBUl').prop('id', id + 'relationLeftArrowConectionHBUl');
    $('#relationRightArrowConectionHBUl').prop('id', id + 'relationRightArrowConectionHBUl');
    $('#relationRightArrowHitbox').prop('id', id + 'relationRightArrowHitbox');
    $('#relationLeftArrowHitbox').prop('id', id + 'relationLeftArrowHitbox');
   

    $('#' + id + 's').attr("href", '#' + id)
    $('#' + id + "s").html(item.name);
    $('#' + id + "width").val(item.width);
    $('#' + id + "height").val(item.height);
    $('#' + id + "fontSize").val(item.fontSize);
    $('#' + id + "strokeWidth").val(item.strokeWidth);
    $('#' + id + "name").val(item.name);
    $('#' + id + "rightAssociationArrow").html(item.rightText);
    $('#' + id + "leftAssociationArrow").html(item.leftText);

    if (item.typeHead == 'AR') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/arrowBlack.png" style="width:25px;" /> ');
    }
    else if (item.typeHead == 'AB') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/arrowFullBlack.png" style="width:25px;" /> ');
    }
    else if (item.typeHead == 'AW') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/arrowFullWhite.png" style="width:25px;" /> ');
    }
    else if (item.typeHead == 'AC') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/composition.png" style="width:25px;" /> ');
    }
    else if (item.typeHead == 'AG') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/agregation.png" style="width:25px;" /> ');
    }
    else if (item.typeHead == 'NN') {
        $('#' + id + "leftArrow").html('None   ');
    }
    if (item.typeFooter == 'AR') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/arrowBlack.png" style="width:25px;" /> ');
    }
    else if (item.typeFooter == 'AB') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/arrowFullBlack.png" style="width:25px;" /> ');
    }
    else if (item.typeFooter == 'AW') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/arrowFullWhite.png" style="width:25px;" /> ');
    }
    else if (item.typeFooter == 'AC') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/composition.png" style="width:25px;" /> ');
    }
    else if (item.typeFooter == 'AG') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/agregation.png" style="width:25px;" /> ');
    }
    else if (item.typeFooter == 'NN') {
        $('#' + id + "rightArrow").html('None   ');
    }
    if (item.typeBody == 'LL') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/line.png" style="width:50px;" /> ');
    }
    else if (item.typeBody  == 'LD') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/FullLineDashedLine.png" style="width:50px;" /> ');
    }
    else if (item.typeBody  == 'DL') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/DashedLineFullLine.png" style="width:50px;" /> ');
    }
    else if (item.typeBody  == 'DD') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/dashedLine.png" style="width:50px;" /> ');
    }
   
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].type != "arrowClass") {
            $('#' + id + "relationRightArrowConectionUl").append("<li><a href= 'javascript:void(0);'  id= '" + canvasItems[i].id + "_relationItem' onclick= \"changeRightRelationConnection(" + canvasItems[i].id + "," + item.id+");\" >" + canvasItems[i].name + "</a ></li >")
            $('#' + id + "relationLeftArrowConectionUl").append("<li><a href= 'javascript:void(0);'  id= '" + canvasItems[i].id + "_relationItem' onclick= \"changeLeftRelationConnection(" + canvasItems[i].id + "," + item.id +");\" >" + canvasItems[i].name + "</a ></li >")
        }
        if (canvasItems[i].type == 'arrowClass') {
            if (item.leftId == canvasItems[i].leftId) {
                $('#' + id + "relationLeftArrowConection").html(item.name);
            }
            if (item.rightId == canvasItems[i].rightId) {
                $('#' + id + "relationRightArrowConection").html(item.name);
            }
        }   
    }

    for (var i = 0; i < 8; i++) {
        $('#' + id + "relationRightArrowConectionHBUl").append("<li><a href= 'javascript:void(0);'  id= '" + i + "_relationItemHB' onclick= \"changeRightHitbox(" + (i) + "," + item.id + ");\" >" + (i + 1) + "</a ></li >")
        $('#' + id + "relationLeftArrowConectionHBUl").append("<li><a href= 'javascript:void(0);'  id= '" + i + "_relationItemHB' onclick= \"changeLeftHitbox(" + (i) + "," + item.id + ");\" >" + (i + 1) + "</a ></li >")



        $('#' + id + "relationRightArrowHitbox").html("None");

        $('#' + id + "relationLeftArrowHitbox").html("None");


    }
    


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
  
    $("#" + id + "itemsList").append(' <option id="optionList" onclick="setItemsListId(this.id);"></option>');
    $('#optionList').prop('id', id + "optionListItem"+ count);
    $('#' + id + "optionListItem" + count).html($('#' + id + "addItem").val());
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
   
    $("#" + id + "metodsList").append(' <option id="optionList" onclick="setMetodsListId(this.id);"></option>');
   
    $('#optionList').prop('id', id + "optionListMetod" + count);
    $('#' + id + "optionListMetod" + count).html($('#' + id + "addMetod").val());
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
    finddArrowAndReloadConnection();
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
function changeTitle(clickedId) {
    var id = findOutId(clickedId, 4);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeTitle($('#' + id + "name").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
    $('#' + id + "s").html($('#' + id + "name").val());
    finddArrowAndReloadConnection();
}
function changeHeight(clickedId) {
    var id = findOutId(clickedId, 6);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeHeight($('#' + id + "height").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
   
}
function changeWidth(clickedId) {
    var id = findOutId(clickedId, 5);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeWidth($('#' + id + "width").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);

}
function changeFontSizeName(clickedId) {
    var id = findOutId(clickedId, 12);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeFontSizeName($('#' + id + "fontSizeName").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);

}
function changeFontSizeExtends(clickedId) {
    var id = findOutId(clickedId, 15);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeFontSizeExtends($('#' + id + "fontSizeExtends").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);

}
function changeFontSize(clickedId) {
    var id = findOutId(clickedId, 8);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeFontSize($('#' + id + "fontSize").val());

        }
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);

}
function changeRightArrow(clickedId, string) {
    var id = findOutId(clickedId, 12);
    
    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeRightArrow(string);

        }
    }
    if (string == 'AR') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/arrowBlack.png" style="width:25px;" /> ');
    }
    else if (string == 'AB') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/arrowFullBlack.png" style="width:25px;" /> ');
    }
    else if (string == 'AW') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/arrowFullWhite.png" style="width:25px;" /> ');
    }
    else if (string == 'AC') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/composition.png" style="width:25px;" /> ');
    }
    else if (string == 'AG') {
        $('#' + id + "rightArrow").html('<img src="../../Content/MenuItems/agregation.png" style="width:25px;" /> ');
    }
    else if (string == 'NN') {
        $('#' + id + "rightArrow").html('None   ');
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
}
function changeLeftArrow(clickedId, string) {
    var id = findOutId(clickedId, 11);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeLeftArrow(string);

        }
    }
    if (string == 'AR') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/arrowBlack.png" style="width:25px;" /> ');
    }
    else if (string == 'AB') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/arrowFullBlack.png" style="width:25px;" /> ');
    }
    else if (string == 'AW') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/arrowFullWhite.png" style="width:25px;" /> ');
    }
    else if (string == 'AC') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/composition.png" style="width:25px;" /> ');
    }
    else if (string == 'AG') {
        $('#' + id + "leftArrow").html('<img src="../../Content/MenuItems/agregation.png" style="width:25px;" /> ');
    }
    else if (string == 'NN') {
        $('#' + id + "leftArrow").html('None   ');
    }
    canvas.clear();
    canvasAdd(canvasItems, canvas);
}
function changeLineArrow(clickedId, string) {
    var id = findOutId(clickedId, 11);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeLineArrow(string);

        }
    }
    if (string == 'LL') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/line.png" style="width:50px;" /> ');
    }
    else if (string == 'LD') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/FullLineDashedLine.png" style="width:50px;" /> ');
    }
    else if (string == 'DL') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/DashedLineFullLine.png" style="width:50px;" /> ');
    }
    else if (string == 'DD') {
        $('#' + id + "lineArrow").html('<img src="../../Content/MenuItems/dashedLine.png" style="width:50px;" /> ');
    }
   
    canvas.clear();
    canvasAdd(canvasItems, canvas);
}
function changeRightAssociation(clickedId, string) {
    var id = findOutId(clickedId, 16);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeRightAssociation(string);

        }
    }
    
    $('#' + id + "rightAssociationArrow").html(string);
   

    canvas.clear();
    canvasAdd(canvasItems, canvas);
}
function changeLeftAssociation(clickedId, string) {
    var id = findOutId(clickedId, 16);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeLeftAssociation(string);

        }
    }

    $('#' + id + "leftAssociationArrow").html(string);


    canvas.clear();
    canvasAdd(canvasItems, canvas);
}
function changeStrokeWidth(clickedId) {
    var id = findOutId(clickedId, 11);

    for (var i = 0; i < canvasItems.length; i++) {
        if (canvasItems[i].id == id) {
            canvasItems[i].changeStrokeWidth($('#' + id + "strokeWidth").val());

        }
    }

    canvas.clear();
    canvasAdd(canvasItems, canvas);
}
function openSelected(clickedId, previous) {
    for (var i = 0; i <= canvasItems.length; i++) {
        if (i != clickedId) {
            if ($('#' + i + 's').attr('aria-expanded') === 'true') {
                eventFire(document.getElementById(i + 's'), 'click');
            }
        }

    }
    if ($('#' + clickedId + 's').attr('aria-expanded') === 'false') {
        eventFire(document.getElementById(clickedId + 's'), 'click');
    } 
   
}

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
function changeRightRelationConnection(id, item) {
    for (var i = 0;i< canvasItems.length; i++) {
        if (canvasItems[i].id == item) {
            canvasItems[i].changeRightId(id);
            $('#' + item + "relationRightArrowConection").html(canvasItems[id-1].name);
            return;
        }
    }
}

function changeLeftRelationConnection(id, item) {
    for (var i = 0;i< canvasItems.length; i++) {
        if (canvasItems[i].id == item) {
            canvasItems[i].changeLeftId(id);
            $('#' + item + "relationLeftArrowConection").html(canvasItems[id-1].name);
           
            return;
        }
    }


   
}

function changeRightHitbox(value, item) {
    for (var i = 0;i< canvasItems.length; i++) {
        if (canvasItems[i].id == item) {
            canvasItems[i].changeRightHitboxs(value);
            $('#' + item + "relationRightArrowHitbox").html(parseInt(value) + 1);

            return;
        }
    }
}

function changeLeftHitbox(value, item) {
    for (var i = 0;i< canvasItems.length; i++) {
        if (canvasItems[i].id == item) {
            canvasItems[i].changeLeftHitboxs(value);

            $('#' + item + "relationLeftArrowHitbox").html(parseInt(value)+1);
            return;
        }
    }
}
