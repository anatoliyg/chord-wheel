function Wheel(eachItemHeight, innerWidth, fontSize, dataArray, divClass, bgColor) {

	var wheelDiv = $('<div></div>')
		.addClass(divClass)
		.width((eachItemHeight * 2) + 80)
		.height((eachItemHeight * 2) + 80);

	var data = dataArray;
	var eachNoteAngle = 360 / data.length;

	function init() {
		buildNotes();
	};

	function buildNotes() {
		for(var i = 0; i < data.length; i ++) {
			var noteDiv = $('<div></div>')
				.addClass('note')
				.css({
					position: 'absolute',
					left: eachItemHeight + 40 - (innerWidth / 2),
					top: 0,
					transform : 'rotateZ('+(i * eachNoteAngle)+'deg)',
					'transform-origin': 'bottom center',
					backgroundColor: bgColor,
					height : eachItemHeight + 40,
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