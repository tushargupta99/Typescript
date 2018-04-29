var Facebook_Data = /** @class */ (function () {
    function Facebook_Data(work, professionalSkills, university, highSchool, currentCity, homeTown, otherPlacesLived, phoneNumber, address, email_ids, date_of_birth, gender, languages, relationshipStatus, familyMembers) {
        this.work = work;
        this.professionalSkills = professionalSkills;
        this.university = university;
        this.highSchool = highSchool;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.otherPlacesLived = otherPlacesLived;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email_ids = email_ids;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
        this.languages = languages;
        this.relationshipStatus = relationshipStatus;
        this.familyMembers = familyMembers;
    }
    //Getters
    Facebook_Data.prototype.getwork = function () {
        return this.work;
    };
    Facebook_Data.prototype.getprofessionalSkills = function () {
        return this.professionalSkills;
    };
    Facebook_Data.prototype.getuniversity = function () {
        return this.university;
    };
    Facebook_Data.prototype.gethighSchool = function () {
        return this.highSchool;
    };
    Facebook_Data.prototype.getcurrentCity = function () {
        return this.currentCity;
    };
    Facebook_Data.prototype.gethomeTown = function () {
        return this.homeTown;
    };
    Facebook_Data.prototype.getotherPlacesLived = function () {
        return this.otherPlacesLived;
    };
    Facebook_Data.prototype.getphoneNumber = function () {
        return this.phoneNumber;
    };
    Facebook_Data.prototype.getaddress = function () {
        return this.address;
    };
    Facebook_Data.prototype.getemail_ids = function () {
        return this.email_ids;
    };
    Facebook_Data.prototype.getdate_of_birth = function () {
        return this.date_of_birth;
    };
    Facebook_Data.prototype.getgender = function () {
        return this.gender;
    };
    Facebook_Data.prototype.getlanguages = function () {
        return this.languages;
    };
    Facebook_Data.prototype.getrelationshipStatus = function () {
        return this.relationshipStatus;
    };
    Facebook_Data.prototype.getfamilyMembers = function () {
        return this.familyMembers;
    };
    //Setters
    Facebook_Data.prototype.setprofessionalSkills = function (professionalSkills) {
        this.professionalSkills = professionalSkills;
    };
    return Facebook_Data;
}());
var user_1 = new Facebook_Data("Edwisor", ['Web Development', 'Front-end', 'Back-end'], "ÏIT Dehli", "St.Mary's Acedamy", "Saharanpur", "Saharanpur", ['Dehli', 'Noida'], 9898121323, "Some adress", ['user1@edwisor.com', 'user_1@gmail.com'], "28-August-1997", "Male", ['Hindi', 'English'], "Single", ['ABC', 'XYZ', 'MNO']);
console.log(user_1.getdate_of_birth());
console.log(user_1.getgender());
console.log(user_1.getprofessionalSkills());
//Setting up professionalSkills using Setters
user_1.setprofessionalSkills(['Web Development', 'Front-end', 'Back-end', 'Cloud-Hosting', 'MongoDB']);
console.log(user_1.getprofessionalSkills());
