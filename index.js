//Video class
var VideoDetails = /** @class */ (function () {
    //constructor with mandatory and optional parameters
    function VideoDetails(title, description, views, likes, disLikes, runtime, publisher, published_On, subtitles_availability, numberOf_comments, saved_current_playback_time) {
        var _this = this;
        //Getters
        this.getAllDetailsOfVideo = function () {
            console.log("      Title: " + _this.title + "\n      Description: " + _this.description + "\n      Views:" + _this.views + "\n      Likes:" + _this.likes + "\n      Dislikes:" + _this.disLikes + "\n      Saved current Playback time:" + _this.saved_current_playback_time + "\n      Runtime:" + _this.runtime + "\n      Publisher:" + _this.publisher + "\n      Published On:" + _this.published_On + "\n      Subtitles: " + _this.subtitles_availability + "\n      Comments:" + _this.numberOf_comments);
        };
        this.getTitles = function () {
            return _this.title;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDisLikes = function () {
            return _this.disLikes;
        };
        this.getNumberOfComments = function () {
            return _this.numberOf_comments;
        };
        this.getRuntime = function () {
            return _this.runtime;
        };
        this.getPublisher = function () {
            return _this.publisher;
        };
        this.getSubtitles = function () {
            return _this.subtitles_availability;
        };
        //method with no implementation yet
        this.getRelatedVideos = function () {
            console.log("getRelatedVideos has no implementation yet.");
        };
        //setters or methods to manipulate the fields
        this.incrementLikes = function () {
            _this.likes++;
        };
        this.decrementLikes = function () {
            _this.likes--;
        };
        this.incrementDisLikes = function () {
            _this.disLikes++;
        };
        this.decrementDisLikes = function () {
            _this.disLikes--;
        };
        this.incrementViews = function () {
            _this.views++;
        };
        this.saveCurrentPlayTime = function (saved_current_playback_time) {
            _this.saved_current_playback_time = saved_current_playback_time;
        };
        this.incrementComments = function () {
            _this.numberOf_comments++;
        };
        this.decrementComments = function () {
            _this.numberOf_comments--;
        };
        this.likes = likes;
        this.disLikes = disLikes;
        this.title = title;
        this.views = views;
        this.runtime = runtime;
        this.publisher = publisher;
        this.published_On = published_On;
        this.subtitles_availability = subtitles_availability;
        this.description = description;
        this.numberOf_comments = numberOf_comments;
        if (saved_current_playback_time == undefined) {
            this.saved_current_playback_time = 0;
        }
        else {
            this.saved_current_playback_time = saved_current_playback_time;
        }
    } //end constructor
    return VideoDetails;
}()); //end class
//Demonstration
//video object without the optional saved_current_playback_time argument
var videoSong = new VideoDetails("Mashup", "from movie XYZ", 13000, 2570, 301, 20, "Artist ABC", "01 jun", false, 1008);
//to display video details
console.log("--details of videoSong--");
videoSong.getAllDetailsOfVideo();
//video object including the optional saved_current_playback_time argument
var educationalVideo = new VideoDetails("Introduction to programming", "using JAVA", 2344, 410, 5, 65, "Venkatesh", "10 Aug", true, 130, 45);
//to display video details
console.log("--details of educationalVideo--");
educationalVideo.getAllDetailsOfVideo();
//to increment Likes
educationalVideo.incrementLikes();
console.log("Likes after increment : " + educationalVideo.getLikes());
//to decrement comments
educationalVideo.decrementComments();
console.log("Number of comments after decrement : " + educationalVideo.getNumberOfComments());
//to call getrelated videos
educationalVideo.getRelatedVideos();
