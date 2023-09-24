class library {
    name :string

    librarystudents:students[]=[]
    librarystaff:librarean[]=[]

constructor(n:string){
    this.name=n
}
//////////////
 studentadd(stdad:students){
    this.librarystudents.push(stdad)
 }
 /////////////////
 librareanadd(libad:librarean){
    this.librarystaff.push(libad)
 }
}

let libobj1 = new library("quaid library")
let libobj2 = new library("iqbal library")


class students {
    name :string
    id : number
    library:string

    constructor (n:string,id:number,lib:string){
        this.name= n
        this.id=id
        this.library=lib
    }
}

let student1=new students("arsal",100,libobj1.name)
let student2=new students("waheed",101,libobj2.name)
let student3=new students("sultan",102,libobj2.name)

libobj1.studentadd(student1)
libobj2.studentadd(student2)
libobj2.studentadd(student3)

class librarean extends students{}

let librarean1=new librarean("isfaq",1,libobj1.name)
let librarean2=new librarean("Shafqat ustad",2,libobj2.name)
let librarean3=new librarean("Shabbir",2,libobj2.name)

libobj1.librareanadd(librarean1)
libobj2.librareanadd(librarean2)
console.log(libobj2);



 






