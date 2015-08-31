function EachWheel( eachItemHeight, innerWidth, fontSize, dataArray, divClass, bgColor, zzIndex) {

    var wheelDiv = $('<div></div>')
        .addClass(divClass)
        .width((eachItemHeight * 2) )
        .height((eachItemHeight * 2) )
        .css({
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: zzIndex
        })

    var data = dataArray;
    var eachNoteAngle = 360 / data.length;

    function init() {
        buildNotes();
    };

    function buildNotes() {
        var noteDiv = null;

        for(var i = 0; i < data.length; i ++) {
            noteDiv = $('<div></div>')
            .addClass('slice')
            .css({
                position: 'absolute',
                left: eachItemHeight  - (innerWidth / 2),
                top: 0,
                //paddingTop: 10,
                transform : 'rotateZ('+(i * eachNoteAngle)+'deg)',
                'transform-origin': 'bottom center',
                //backgroundColor: bgColor,
                'background-image': 'url(img/slice.png)',
                'background-size': '100% 100%',
                height : eachItemHeight ,
                width: innerWidth,
                fontSize: fontSize,
                textAlign: 'center'
            })
            .text(data[i])
            .appendTo(wheelDiv);
        }
    }

    init();

    this.getDiv = function(){
        return wheelDiv;
    }

};