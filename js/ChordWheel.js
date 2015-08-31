//class 
function ChordWheel(config) {

    var bgColor = config.bgColor;
    var container = config.div;

    var wheel1Notes = 'c g d a e b f# c# ab eb bb f';
    var wheel2Notes = 'em am bm em f#m bm c#m f#m g#m c#m d#m g#m a#m d#m e#m a#m d#m e#m a#m cm fm gm cm dm gm am dm';
    var wheel3Notes = 'b f# c# g# d# a# e# c g d a e';

    var notes1Arr = wheel1Notes.split(" ");
        notes2Arr = wheel2Notes.split(" ");
        notes3Arr = wheel3Notes.split(" ");

    var innerPadding = 40;
    var hole = null;


    function init(){

        buildWheels();
        buildControls();
        //buildMask();
        addTouchListeners();
    }

    function addTouchListeners(){

    }

    function buildControls() {
        var controls = $("<div></div>")
            .addClass('controls')
            .css({
                width: container.width(),
                marginTop: 40
            })

        for(var i = 0; i < notes1Arr.length; i ++) {
            var btn = $('<button data-note-index='+i+'>'+notes1Arr[i]+'</button>')
                .css({
                    width: 70,
                    marginRight: 30,
                    marginBottom: 10
                })
                .click(function(e){
                    var index = $(e.currentTarget).data('note-index');
                    scrollToIndex(index)
                });

            controls.append(btn);
        }

        $('body').append(controls);
    }

    function scrollToIndex(index) {
    
        var eachNoteAngle = 360 / notes1Arr.length;

        var desiredRotation = index * -eachNoteAngle;
        //letsmake it remainder of deviding by 360
        //desiredRotation = desiredRotation % 360;

        container.css({
            transform : 'rotateZ('+ desiredRotation+'deg)',
        });
    };

    function buildWheels() {
        var parentW = container.width(),
            parentH = container.height();

        if(parentW !== parentH) {
            console.warn('parent container should have the same width and height');
        }

        var eachWheelHeight = ((parentH - innerPadding) / 2) / 3; 
        var innerWheelHeight = eachWheelHeight + innerPadding;

        var innerWheel = new EachWheel(eachWheelHeight * 1.4, 50, 30, notes1Arr, 'wheel0', 'red' , 3);
        container.append(innerWheel.getDiv());
        centerInContainer(innerWheel);

        var middleWheel = new EachWheel(eachWheelHeight * 2.2, 50, 18, notes2Arr, 'wheel1', 'yellow' , 2);
        container.append(middleWheel.getDiv());
        centerInContainer(middleWheel);

        var bigWheel = new EachWheel(eachWheelHeight * 3, 90, 40, notes3Arr, 'wheel3', 'green', 1);
        container.append(bigWheel.getDiv());
        centerInContainer(bigWheel);

        //add a hole
        var holeDiameter  = container.width() / 4;
        hole = $('<div></div')
            .width(holeDiameter)
            .height(holeDiameter)
            .css({
                position: 'absolute',
                top: 0,
                left: 0,
                borderRadius: '50%',
                zIndex: 5,
                backgroundColor: 'white'
            });

        container.append(hole);   
        centerInContainer(hole);
    }

    function centerInContainer(wheel) {

        var contW = container.width();
        var theWheel = wheel.hasOwnProperty('getDiv') ? wheel.getDiv() : wheel;
        var wheelWidth = theWheel.width();

        var offset = (contW - wheelWidth) / 2;
        //center it
        theWheel.css({
            left: offset,
            top: offset
        });
    }

    init();
}