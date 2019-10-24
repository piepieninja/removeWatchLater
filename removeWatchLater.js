var watchpercent = 50; // remove things more than 50 % watched
console.log("Removing videos watched more than: " + watchpercent + "%");
// load all the videos
var load_button = $('body').getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more browse-items-load-more-button")[0];
load_button.click();
var load_button = $('body').getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more browse-items-load-more-button")[0];
load_button.click();
// get the tiles 
var tiles = $('body').getElementsByClassName("yt-uix-tile");
var removed = 0;
var sum = 0;
console.log("loaded " + tiles.length + " tiles...");
for (var i = 0; i < tiles.length; i++){
	// get the progress bar from the tile
	var thumbnail = tiles[i].getElementsByClassName("pl-video-thumbnail")[0];
	var progress = thumbnail.getElementsByClassName("resume-playback-progress-bar")[0];
	// see if it's there
	if (typeof progress !== 'undefined'){
		if (watchpercent < progress.clientWidth){
			removed++;
			sum += progress.clientWidth;
			// remove the video 
			var remove_button = tiles[i].getElementsByClassName("more-menu-wrapper")[0].getElementsByClassName("pl-video-edit-options")[0].getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup pl-video-edit-remove yt-uix-tooltip")[0];
			console.log("Removing video: " + (i+1));
			remove_button.click();
		}
	}
}
console.log("========================================");
console.log("	Deleted: " + removed + " from watch later");
console.log(" Average watch over " + watchpercent + "% is " + (sum/removed) + "%");
console.log("========================================");
