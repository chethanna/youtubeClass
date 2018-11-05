//Video class
class VideoDetails {
    private likes:number;
    private disLikes:number;
    private title:string;
    private views:number;
    private runtime:number;//in minutes
    private saved_current_playback_time:number;//in minutes, to save the current time of video which the user has already watched
    private publisher:string;
    private published_On:string;
    private subtitles_availability: boolean;
    private description:string;
    private numberOf_comments: number;
    //constructor with mandatory and optional parameters
    constructor (title:string,description:string,views:number,likes:number,disLikes:number,runtime:number,publisher:string,published_On:string,subtitles_availability: boolean,numberOf_comments: number,saved_current_playback_time?:number){
        this.likes=likes;
        this.disLikes=disLikes;
        this.title=title;
        this.views=views;
        this.runtime=runtime;
        this.publisher=publisher;
        this.published_On=published_On;
        this.subtitles_availability=subtitles_availability;
        this.description=description;
        this.numberOf_comments=numberOf_comments;
        if (saved_current_playback_time == undefined) 
        {
            this.saved_current_playback_time = 0;
        }
        else
        {
            this.saved_current_playback_time = saved_current_playback_time;
        }
    }//end constructor
    
    //Getters
    getAllDetailsOfVideo = () =>{
      console.log(`      Title: ${this.title}
      Description: ${this.description}
      Views:${this.views}
      Likes:${this.likes}
      Dislikes:${this.disLikes}
      Saved current Playback time:${this.saved_current_playback_time}
      Runtime:${this.runtime}
      Publisher:${this.publisher}
      Published On:${this.published_On}
      Subtitles: ${this.subtitles_availability}
      Comments:${this.numberOf_comments}`)  
    } 

    getTitles = ()=> {
        return this.title;
    }

    getDescription = ()=> {
        return this.description;
    }

    getViews = ()=> {
        return this.views;
    }

    getLikes = ()=> {
        return this.likes;
    }

    getDisLikes = ()=> {
        return this.disLikes;
    }

    getNumberOfComments = ()=> {
        return this.numberOf_comments;
    }
    
    getRuntime = ()=> {
        return this.runtime;
    }

    getPublisher = ()=> {
        return this.publisher;
    }

    getSubtitles = ()=> {
        return this.subtitles_availability;
    }
    //method with no implementation yet
    getRelatedVideos = ()=> {
        console.log("getRelatedVideos has no implementation yet.")
    }
    
    //setters or methods to manipulate the fields
    incrementLikes = ()=> {
        this.likes++;
    }

    decrementLikes = ()=> {
        this.likes--;
    }

    incrementDisLikes = ()=> {
        this.disLikes++;
    }

    decrementDisLikes = ()=> {
        this.disLikes--;
    }

    incrementViews = ()=> {
        this.views++;
    }
    
    saveCurrentPlayTime = (saved_current_playback_time:number)=>{
        this.saved_current_playback_time=saved_current_playback_time;
    }

    incrementComments = ()=> {
        this.numberOf_comments++;
    }

    decrementComments = ()=> {
        this.numberOf_comments--;
    }

}//end class

//Demonstration
//video object without the optional saved_current_playback_time argument
let videoSong = new VideoDetails("Mashup","from movie XYZ",13000,2570,301,20,"Artist ABC","01 jun",false,1008);
//to display video details
console.log(`--details of videoSong--`);
videoSong.getAllDetailsOfVideo();
//video object including the optional saved_current_playback_time argument
let educationalVideo = new  VideoDetails("Introduction to programming","using JAVA",2344,410,5,65,"Venkatesh","10 Aug",true,130,45)
//to display video details
console.log(`--details of educationalVideo--`);
educationalVideo.getAllDetailsOfVideo();
//to increment Likes
educationalVideo.incrementLikes();
console.log(`Likes after increment : ${educationalVideo.getLikes()}`);
//to decrement comments
educationalVideo.decrementComments();
console.log(`Number of comments after decrement : ${educationalVideo.getNumberOfComments()}`);
//to call getrelated videos
educationalVideo.getRelatedVideos();