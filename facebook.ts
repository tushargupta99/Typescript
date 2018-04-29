class Facebook_Data{
    
    // Work & Education
    private work: string;
    private professionalSkills: string[];
    private university: string;
    private highSchool: string;
    
    //Places U have lived
    private currentCity: string;
    private homeTown: string;
    private otherPlacesLived:string[];

    //contents  & basic Info.
    private phoneNumber: number;
    private address: string;
    private email_ids: string[];
    private date_of_birth: string;
    private gender: string;
    private languages: string[];

    // Family & Relationships
    private relationshipStatus: string;
    private familyMembers: string[];
 

    constructor (work:string, professionalSkills:string[], university: string, highSchool: string, currentCity: string, homeTown: string, otherPlacesLived: string[], phoneNumber: number, address: string, email_ids: string[], date_of_birth:string, gender: string, languages: string[], relationshipStatus:string, familyMembers: string[]){
        this.work=work;
        this.professionalSkills=professionalSkills;
        this.university=university;
        this.highSchool=highSchool;
        this.currentCity=currentCity;
        this.homeTown=homeTown;
        this.otherPlacesLived=otherPlacesLived;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.email_ids=email_ids;
        this.date_of_birth=date_of_birth;
        this.gender=gender;
        this.languages=languages;
        this.relationshipStatus=relationshipStatus;
        this.familyMembers=familyMembers;

    }
    
    //Getters
    public getwork(){
        return this.work;
    }

    public getprofessionalSkills(){
        return this.professionalSkills;
    }

    public getuniversity(){
        return this.university;
    }
     
    public gethighSchool(){
        return this.highSchool;
    }
    
    public getcurrentCity(){
        return this.currentCity;
    }

    public gethomeTown(){
        return this.homeTown;
    }
     
    public getotherPlacesLived(){
        return this.otherPlacesLived;
    }
    public getphoneNumber(){
        return this.phoneNumber;
    }

    public getaddress(){
        return this.address;
    }

    public getemail_ids(){
        return this.email_ids;
    }
    
    public getdate_of_birth(){
        return this.date_of_birth;
    } 

    public getgender(){
        return this.gender;
    }
    public getlanguages(){
        return this.languages;
    }
    public getrelationshipStatus(){
        return this.relationshipStatus;
    }
    public getfamilyMembers(){
        return this.familyMembers;
    }


    //Setters
    public setprofessionalSkills(professionalSkills: string[]){
        this.professionalSkills=professionalSkills
    }


    
}


let user_1=new Facebook_Data("Edwisor",['Web Development','Front-end','Back-end'],"ÏIT Dehli","St.Mary's Acedamy","Saharanpur","Saharanpur",['Dehli','Noida'],9898121323,"Some adress",['user1@edwisor.com','user_1@gmail.com'],"28-August-1997","Male",['Hindi','English'],"Single",['ABC','XYZ','MNO']);
console.log(user_1.getdate_of_birth());
console.log(user_1.getgender());
console.log(user_1.getprofessionalSkills());

//Setting up professionalSkills using Setters

user_1.setprofessionalSkills(['Web Development','Front-end','Back-end','Cloud-Hosting','MongoDB']);
console.log(user_1.getprofessionalSkills());

    








