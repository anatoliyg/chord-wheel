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
            .html( svgSlice(config.size.width, config.size.height, 360/data.length ) )
            .click(function(e){

                var theNoteIndex = $(this).data('note-index')
                var note = data[theNoteIndex];
                console.log('should play '+note)
                window.sound.play(note);
            })
            .appendTo(wheelDiv);
        }
    };

    function svgSlice(w, h, angle) {
        var angleInRadians = angle * Math.PI/180;
        var yOffset = h * Math.cos(angleInRadians);
        var startCoord = h - yOffset;
        //<svg height="400" width="450"><path d="M0,0 l62.5, 216.506 l62.5, -216.506 a250,250 0 0,0 -125,0  z" stroke="blue" stroke-width="5" fill="none" /></svg>
        var finalString = '<svg height="'+h+'" width="'+w+'"><path d="M0 '+startCoord+' l'+w/2+', '+yOffset+' l'+w/2+', '+(yOffset*-1)+' a'+h+','+h+' 0 0,0 '+(w*-1)+',0 z" stroke="'+'black'+'" stroke-width="'+'1'+'" fill="'+'blue'+'"/></svg>'
        return finalString;
        //
        //return '<svg height= '+h+ ' width= '+w+'> <path d= "M0, '+startCoord+' l '+w/2+','+yOffset+' a '+h+', '+h+' 0'+ '0,0 -'+w+' , 0  z" style="fill:'+ 'blue' +';stroke:purple;stroke-width:1" /></svg>'
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