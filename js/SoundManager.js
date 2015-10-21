function SoundManager() {

	window.sound = null;
	var notesArray = ['c', 'c#/db', 'd', 'd#/eb', 'e', 'f/e#', 'f#/gb', 'g', 'g#/ab', 'a', 'a#/bb', 'b', 'cm', 'c#m/dbm', 'dm', 'd#m/ebm', 'em', 'fm/e#m', 'f#m/gbm', 'gm', 'g#m/abm', 'am', 'a#m/bbm', 'bm']
	init();

	function init() {

		sound = new Howl({
				urls: ['mp3/major-minor-piano.mp3'],
				sprite: createSpriteObject()
		});
		// shoot the laser!
		sound.play('c');
	};

	function createSpriteObject() {
		var newObj = {};
		var count = 0;

		for(var i = 0; i < notesArray.length; i ++) {
			var notes = notesArray[i].split('/');
			//save the sharp or regular
			var noteName = notes[0];
			newObj[noteName] = [4000 * count, 4000 ];
			//save a flat
			if(notes.length === 2){
				noteName = notes[1];
				newObj[noteName] = [4000 * count, 4000 ];
			}
			count += 1;
		}
		console.log(newObj);
		return newObj;
	}

}