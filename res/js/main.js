// import * as Tone from 'tone';
// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "8n");

$(document).ready(function() {
	$(".synth-key").on("click", function() {
		console.log($(this).attr("id"))
	});
});
