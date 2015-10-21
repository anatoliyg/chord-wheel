function EachWheel(config) {

    var wheelDiv = $('<div></div>')
        .addClass(config.className)
        .width(config.size.height * 2)
        .height(config.size.height * 2)
        .css({
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: config.zIndex
        })

    var data = config.data;
    var eachNoteAngle = 360 / data.length;

    init();

    function init() {
        buildNotes();
    };

    function buildNotes() {


        var noteDiv = null;

        for(var i = 0; i < data.length; i ++) {

            var theNote = data[i];
            var theWidth = config.fixedWidth ? config.fixedWidth : config.size.width;
            noteDiv = $('<div data-note-index='+i+'></div>')
            .addClass('slice')
            .css({
                position: 'absolute',
                left: config.size.height  - ((config.fixedWidth ? config.fixedWidth : config.size.width ) / 2),
                top: 0,
                //paddingTop: 20,
                lineHeight: config.size.height * .3+'px',
                transform : 'rotateZ('+(i * eachNoteAngle)+'deg)',
                'transform-origin': 'bottom center',
                //backgroundColor: bgColor,
                //'background-image': 'url('+config.bgImage+')',
                'background-size': '100% 100%',
                height : config.size.height ,
                width: theWidth,
                fontSize: config.fontSize,
                textAlign: 'center'
            })
            .html( svgTriangle(config.size.width, config.size.height, 360/data.length ) )
            .click(function(e){

                var theNoteIndex = $(this).data('note-index')
                var note = data[theNoteIndex];
                console.log('should play '+note)
                window.sound.play(note);
            })
            .appendTo(wheelDiv);
        }
    };

    function svgTriangle(w, h, angle) {
        var point1 = {x:0,y:0};
        var point2 = {x:w,y:0};
        var point3 = {x:w/2,y:h};

        var pointsArray = [point1, point2, point3]
        var pointsString = '';

        for(var i = 0; i < pointsArray.length; i ++) {
            pointsString += pointsArray[i].x + ',';
            pointsString += pointsArray[i].y + ' '
        }


        var a = pointsString;

        //200,10 250,190 160,210
        return '<svg height="'+h+'" width="'+w+'"><polygon points="'+pointsString+'" style="fill:'+ 'blue' +';stroke:purple;stroke-width:1" /></svg>'
    };

    //cleanupNote(data[i]) 
    function cleanupNote(text){
        //if second char is # or b, replace with html code
        var replaced = text.charAt(0).toUpperCase() + text.slice(1);
        //if(replaced.length === 1){
            return replaced;
        // }
        // else{
        //     var a = replaced.replace('b', '&#9837;');
        //     var b = a.replace('#','&#9839;');
        //     return b;
        // }
        
    }

    this.getDiv = function(){
        return wheelDiv;
    }

};