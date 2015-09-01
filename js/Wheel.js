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
            noteDiv = $('<div data-note-index='+i+'></div>')
            .addClass('slice')
            .css({
                position: 'absolute',
                left: config.size.height  - (config.size.width / 2),
                top: 0,
                //paddingTop: 20,
                lineHeight: '50px',
                transform : 'rotateZ('+(i * eachNoteAngle)+'deg)',
                'transform-origin': 'bottom center',
                //backgroundColor: bgColor,
                'background-image': 'url('+config.bgImage+')',
                'background-size': '100% 100%',
                height : config.size.height ,
                width: config.size.width,
                fontSize: config.fontSize,
                textAlign: 'center'
            })
            .html( cleanupNote(data[i]) )
            .appendTo(wheelDiv);
        }
    };

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