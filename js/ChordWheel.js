//class 
function ChordWheel(config) {

    var bgColor = config.bgColor;
    var container = config.div;

    var notes1Arr = 'c g d a e b f# c# ab eb bb f'.split(" ");
        notes2Arr = 'em am bm em f#m bm c#m f#m g#m c#m d#m g#m a#m d#m fm bbm cm fm gm cm dm gm am dm'.split(" ");
        notes3Arr = 'b f# c# g# d# a# e# c g d a e'.split(" ");


        console.dir(notes2Arr.length);

    var innerPadding = 40;
    var hole = null;

    var parentW,
        parentH 

    init();

    function init(){


        buildWheels();
        buildControls();
        //buildMask();
        addTouchListeners();
    };

    this.destroy = function(){
        ///


        container.empty();
        container = null;

    }

    function addTouchListeners(){

        var rotationSnap = 90;
        Draggable.create("#wheelHolder", {
            type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
            throwProps:true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
            snap:function(endValue) { 
                //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
                //return 360 / notes1Arr.length;
            }
        });
    };

    function buildControls() {
        var controls = $("<div></div>")
            .addClass('controls')
            .css({
                width: container.width(),
                margin: '0 auto',
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

        $('.contents').append(controls);
    };

    function scrollToIndex(index) {
    
        var eachNoteAngle = 360 / notes1Arr.length;
        var desiredRotation = index * -eachNoteAngle;

        container.css({
            transform : 'rotateZ('+ desiredRotation+'deg)',
        });
    };

    function buildWheels() {
        parentW = config.width;
        parentH = config.height;

        container.css({
            width: parentW,
            height: parentH
        })

        if(parentW !== parentH) {
            console.warn('parent container should have the same width and height');
        }

        var eachWheelHeight = ((parentH ) / 2) / 3; 
        var innerWheelHeight = eachWheelHeight + innerPadding;

        var innerWheel = new EachWheel({
            size: sizeFromRatio(0.4, notes1Arr.length),
            fontSize: 20,
            data: notes1Arr,
            className: 'wheel1',
            bgColor: 'red',
            bgImage: 'img/slice-green.png',
            zIndex: 3, 
            parent: container
        });
        container.append(innerWheel.getDiv());
        centerInContainer(innerWheel);

        var middleWheel = new EachWheel({
            size: sizeFromRatio(0.7, notes2Arr.length),
            fontSize: 12,
            data: notes2Arr,
            className: 'wheel2',
            bgColor: 'yellow',
            bgImage: 'img/slice-blue.png',
            zIndex: 2,
            parent: container
        });
        container.append(middleWheel.getDiv());
        centerInContainer(middleWheel);

        var bigWheel = new EachWheel({
            size: sizeFromRatio(0.95, notes3Arr.length),
            fontSize: 54,
            data: notes3Arr,
            className: 'wheel3',
            bgColor: 'yellow',
            bgImage: 'img/slice-red.png',
            zIndex: 1,
            parent: container,
            autoWidth: 100
        });
        container.append(bigWheel.getDiv());
        centerInContainer(bigWheel);

        //add a hole
        var holeDiameter  = container.width() / 10;
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
    };

    function sizeFromRatio( ratio, angles) {
        var radius = parentW / 2;
        var height = radius * ratio;

        var angle = 360 / angles;
        var reversedAngle = (180 - angle) / 2;

        //one angle is  (180 - angle) / 2 , another 90
        //one side is height
        //var h = height / (Math.sin(reversedAngle));

        //var widthSqared =  (h * h) + (h * h) - 2 * h * h * Math.cos(reversedAngle);
        var w = height /  Math.tan(reversedAngle  * (Math.PI/180));

        return {
            width: w * 2,
            height: height
        }
    };

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
    };
};