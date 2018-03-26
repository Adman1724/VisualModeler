function canvasAdd(array, canvas) {
    for (var i = 0; i < array.length; i++) {
        
        canvas.add(array[i].group);
       
    }
}
function removeItem(array, canvas) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].group == canvas.getActiveObject()) {
            array.splice(i, 1);
        }
    }
    reloadRightMenu();
    canvas.remove(canvas.getActiveObject());
}
