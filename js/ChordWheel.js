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


    function init(){

        buildWheels();
        //buildMask();
        addTouchListeners();
    }

    function addTouchListeners(){

    }

    function buildWheels() {
        var parentW = container.width(),
            parentH = container.height();

        if(parentW !== parentH) {
            console.warn('parent container should have the same width and height');
        }

        var eachWheelHeight = ((parentH - innerPadding) / 2) / 3; 
        var innerWheelHeight = eachWheelHeight + innerPadding;

        var innerWheel = new EachWheel(innerWheelHeight, 30, 12, notes1Arr, 'wheel0', 'red' , 3);
        container.append(innerWheel.getDiv());
        centerInContainer(innerWheel);

        var middleWheel = new EachWheel(eachWheelHeight * 2, 30, 30, notes2Arr, 'wheel1', 'yellow' , 2);
        container.append(middleWheel.getDiv());
        centerInContainer(middleWheel);

        var bigWheel = new EachWheel(eachWheelHeight * 3, 50, 40, notes3Arr, 'wheel3', 'green', 1);
        container.append(bigWheel.getDiv());
        centerInContainer(bigWheel);



        //most inner wheel
        //var containerWheel0 = 
    }

    function centerInContainer(wheel) {

        var contW = container.width();
        var wheelWidth = wheel.getDiv().width();

        var offset = (contW - wheelWidth) / 2;
        //center it
        wheel.getDiv().css({
            left: offset,
            top: offset
        })
        


        
    }


    init();
}