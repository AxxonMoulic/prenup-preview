$( document ).ready( function () {

var vid = $( '#bgvid' );
var pauseButton = $( '#polina  button ' );

function vidFade() {
	vid.addClass('stopfade');
	console.log(vid);
}

vidFade();


vid.on( 'ended', function ( ) {
	vid[0].pause();
	vidFade();
})

pauseButton.click( function (){
	vid.toggleClass( 'stopfade' );
	if (vid[0].paused) {
		vid[0].play();
		$( this ).html('Pause');
	} else {
		vid[0].pause();
		$( this ).html('Paused');
	}

})
});