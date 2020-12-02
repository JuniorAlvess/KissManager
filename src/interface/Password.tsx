export class iPassword {
    public id: number;
    public title: string;
    public username: string;
    public password: string;
    public link: string;
    public icon: string;
    constructor(title:string ,username: string,password:string,link:string,icon:string, id?: number){
        this.id = id;
        this.title = title;
        this.username = username;
        this.password = password;
        this.link = link;
        this.icon = icon;
    }
}
