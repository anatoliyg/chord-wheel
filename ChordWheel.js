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

		var innerWheel = new Wheel(innerWheelHeight, 30, 12, notes1Arr, 'wheel0', 'red');
		container.append(innerWheel.getDiv());

		var middleWheel = new Wheel(eachWheelHeight+ innerWheelHeight, 30, 20, notes2Arr, 'wheel1', 'yellow');
		container.append(middleWheel.getDiv());

		var bigWheel = new Wheel(parentW / 2, 30, 20, notes3Arr, 'wheel3', 'green');
		container.append(bigWheel.getDiv());

		//most inner wheel
		//var containerWheel0 = 
	}

	function buildWheel(wheelIndex, dataArray, whatDiv) {
		


		
	}


	init();
}