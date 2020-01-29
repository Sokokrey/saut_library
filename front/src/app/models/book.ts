export class Book {

    constructor( id=0, name='', author='', year=0){
        this.id     = id;
        this.name   = name;
        this.author = author;
        this.year   = year;
    } 
    
    id: number;
    name : String;
    author: String;
    year: number;
}
