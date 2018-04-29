class Youtube_Videos{

    private _id: string;
    //snippet
    private channelId: string;
    private url: string;
    private title: string;
    private description: string;
    private thumbnail_Url: string;
    private thumbnail_height:number;
    private thumbnail_width:number;
    private channelTitle: string;
    private tags: string[];
    private comments:string[];
    private categoryId: string;
    private defaultLanguage: string;
    //contents details
    private publishedAt: string; //publishing Date
    private uploadStatus: string;
    private duration: number; //In minutes
    private licensedContent: boolean;
    private regionRestriction: boolean;
    //statistics
    private viewCount: number;
    private likeCount: number;
    private dislikeCount: number;
    private shareCount: number;
    private downloadCount: number;
    private commentCount: number;

    constructor (_id:string, channelId:string, url: string, title: string, description: string, thumbnail_Url: string, thumbnail_height: number, thumbnail_width: number, channelTitle: string, tags: string[], comments:string[], categoryId: string, defaultLanguage: string, publishedAt: string, uploadStatus:string, duration: number, licensedContent: boolean, regionRestriction: boolean, viewCount: number, likeCount: number, dislikeCount: number, shareCount:number, downloadCount:number, commentCount: number){
        this._id=_id;
        this.channelId=channelId;
        this.url=url;
        this.title=title;
        this.description=description;
        this.thumbnail_Url=thumbnail_Url;
        this.thumbnail_height=thumbnail_height;
        this.thumbnail_width=thumbnail_width;
        this.channelTitle=channelTitle;
        this.tags=tags;
        this.comments=comments;
        this.categoryId=categoryId;
        this.defaultLanguage=defaultLanguage;
        this.publishedAt=publishedAt;
        this.uploadStatus=uploadStatus;
        this.duration=duration;
        this.licensedContent=licensedContent;
        this.regionRestriction=regionRestriction;
        this.viewCount=viewCount;
        this.likeCount=likeCount;
        this.dislikeCount=dislikeCount;
        this.shareCount=shareCount;
        this.downloadCount=downloadCount;
        this.commentCount=commentCount;
    }
    
    //Getters
    public get_id(){
        return this._id;
    }

    public getchannelId(){
        return this.channelId;
    }

    public geturl(){
        return this.url;
    }
     
    public gettitle(){
        return this.title;
    }
    
    public getdescription(){
        return this.description;
    }

    public getthumbnail_Url(){
        return this.thumbnail_Url;
    }
     
    public getthumbnail_height(){
        return this.thumbnail_height;
    }
    public getthumbnail_width(){
        return this.thumbnail_width;
    }

    public getchannelTitle(){
        return this.channelTitle;
    }
    
    public gettags(){
        return this.tags;
    } 

    public getcomments(){
        return this.comments;
    }

    public getcategoryId(){
        return this.categoryId;
    }
     
    public getuploadStatus(){
        return this.uploadStatus;
    }
    public getlicensedContent(){
        return this.licensedContent;
    }

    public getregionRestriction(){
        return this.regionRestriction;
    }
     
    public getviewCount(){
        return this.viewCount;
    }

    public getlikeCount(){
        return this.likeCount;
    }
    
    public getdislikeCount(){
        return this.dislikeCount;
    }
    
    public getshareCount(){
        return this.shareCount;
    }
    
    public getdownloadCount(){
        return this.downloadCount;
    }
    
    public getcommentCount(){
        return this.commentCount;
    }


    //Few Setters
    public settitle(title:string){
        this.title=title;
    }

}


let video1=new Youtube_Videos("MO3KA22242","AZZKA25","some URL","Angry Masterji 6","A new video from Angry Masterji series","Some URL",48,48,"BB ki Vines",['angry','masterji','bbkivines','series'],['comment_1','comment_2','comment_3'],"AMZKA263","Hindi","23-April-2018","Online",20,true,false,442388,43232,232,43,10,879);
console.log(video1.gettags());
console.log(video1.gettitle());
video1.settitle("Angry Masterji 8")
console.log(video1.gettitle());
console.log(video1.getlikeCount());
console.log(video1.getdislikeCount());
console.log(video1.getcommentCount());
    








