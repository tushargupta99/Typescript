var Youtube_Videos = /** @class */ (function () {
    function Youtube_Videos(_id, channelId, url, title, description, thumbnail_Url, thumbnail_height, thumbnail_width, channelTitle, tags, comments, categoryId, defaultLanguage, publishedAt, uploadStatus, duration, licensedContent, regionRestriction, viewCount, likeCount, dislikeCount, shareCount, downloadCount, commentCount) {
        this._id = _id;
        this.channelId = channelId;
        this.url = url;
        this.title = title;
        this.description = description;
        this.thumbnail_Url = thumbnail_Url;
        this.thumbnail_height = thumbnail_height;
        this.thumbnail_width = thumbnail_width;
        this.channelTitle = channelTitle;
        this.tags = tags;
        this.comments = comments;
        this.categoryId = categoryId;
        this.defaultLanguage = defaultLanguage;
        this.publishedAt = publishedAt;
        this.uploadStatus = uploadStatus;
        this.duration = duration;
        this.licensedContent = licensedContent;
        this.regionRestriction = regionRestriction;
        this.viewCount = viewCount;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.shareCount = shareCount;
        this.downloadCount = downloadCount;
        this.commentCount = commentCount;
    }
    //Getters
    Youtube_Videos.prototype.get_id = function () {
        return this._id;
    };
    Youtube_Videos.prototype.getchannelId = function () {
        return this.channelId;
    };
    Youtube_Videos.prototype.geturl = function () {
        return this.url;
    };
    Youtube_Videos.prototype.gettitle = function () {
        return this.title;
    };
    Youtube_Videos.prototype.getdescription = function () {
        return this.description;
    };
    Youtube_Videos.prototype.getthumbnail_Url = function () {
        return this.thumbnail_Url;
    };
    Youtube_Videos.prototype.getthumbnail_height = function () {
        return this.thumbnail_height;
    };
    Youtube_Videos.prototype.getthumbnail_width = function () {
        return this.thumbnail_width;
    };
    Youtube_Videos.prototype.getchannelTitle = function () {
        return this.channelTitle;
    };
    Youtube_Videos.prototype.gettags = function () {
        return this.tags;
    };
    Youtube_Videos.prototype.getcomments = function () {
        return this.comments;
    };
    Youtube_Videos.prototype.getcategoryId = function () {
        return this.categoryId;
    };
    Youtube_Videos.prototype.getuploadStatus = function () {
        return this.uploadStatus;
    };
    Youtube_Videos.prototype.getlicensedContent = function () {
        return this.licensedContent;
    };
    Youtube_Videos.prototype.getregionRestriction = function () {
        return this.regionRestriction;
    };
    Youtube_Videos.prototype.getviewCount = function () {
        return this.viewCount;
    };
    Youtube_Videos.prototype.getlikeCount = function () {
        return this.likeCount;
    };
    Youtube_Videos.prototype.getdislikeCount = function () {
        return this.dislikeCount;
    };
    Youtube_Videos.prototype.getshareCount = function () {
        return this.shareCount;
    };
    Youtube_Videos.prototype.getdownloadCount = function () {
        return this.downloadCount;
    };
    Youtube_Videos.prototype.getcommentCount = function () {
        return this.commentCount;
    };
    //Few Setters
    Youtube_Videos.prototype.settitle = function (title) {
        this.title = title;
    };
    return Youtube_Videos;
}());
var video1 = new Youtube_Videos("MO3KA22242", "AZZKA25", "some URL", "Angry Masterji 6", "A new video from Angry Masterji series", "Some URL", 48, 48, "BB ki Vines", ['angry', 'masterji', 'bbkivines', 'series'], ['comment_1', 'comment_2', 'comment_3'], "AMZKA263", "Hindi", "23-April-2018", "Online", 20, true, false, 442388, 43232, 232, 43, 10, 879);
console.log(video1.gettags());
console.log(video1.gettitle());
video1.settitle("Angry Masterji 8");
console.log(video1.gettitle());
console.log(video1.getlikeCount());
console.log(video1.getdislikeCount());
console.log(video1.getcommentCount());
