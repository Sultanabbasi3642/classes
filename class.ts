//  class library {
//     name :string

//     librarystudents:students[]=[]
//     librarystaff:librarean[]=[]

// constructor(n:string){
//     this.name=n
// }
// //////////////
//  studentadd(stdad:students){
//     this.librarystudents.push(stdad)
//  }
//  /////////////////
//  librareanadd(libad:librarean){
//     this.librarystaff.push(libad)
//  }
// }

// let libobj1 = new library("quaid library")
// let libobj2 = new library("iqbal library")


//  class students {
//     name :string
//     id : number
//     library:string

//     constructor (n:string,id:number,lib:string){
//         this.name= n
//         this.id=id
//         this.library=lib
//     }
//     welcomemsg(){
//       console.log("Hello students");
      
//     }
// }

// let student1=new students("arsal",100,libobj1.name)
// let student2=new students("waheed",101,libobj2.name)
// let student3=new students("sultan",102,libobj2.name)
// // let student4=new students("momim",102,libobj1.name)

// libobj1.studentadd(student1)
// libobj2.studentadd(student2)
// libobj2.studentadd(student3)
// // libobj1.studentadd(student4)
//  class librarean extends students{
//     email:string
//     phonenumber:string
//     constructor(n:string,id:number,lib:string,e:string,p:string){
//       super(n,id,lib)
//         this.email=e
//         this.phonenumber=p
//     }
//     welcomelib(){
//       super.welcomemsg()
//       console.log("hello LIB");
      
//     }
// }
//  //this is called class inheritance

// let librarean1=new librarean("isfaq",1,libobj1.name,"faqa@yho.com","0333-2213332")
// let librarean2=new librarean("Shafqat ustad",2,libobj2.name,"saka@yho.com","0333-2456754")
// let librarean3=new librarean("Shabbir",2,libobj2.name,"faqa@yho.com","0333-1122345")

// // libobj1.librareanadd(librarean1)
// // libobj2.librareanadd(librarean2)
// // console.log(libobj2);
// // extending llibrarean class

// // librarean1.addinfo("faqa@yho.com","0333-2213332")
// // librarean2.addinfo("saka@yho.com","0333-2456754")
// // librarean3.addinfo("faqa@yho.com","0333-1122345")
// libobj1.librareanadd(librarean1)
// libobj2.librareanadd(librarean2)
// console.log(librarean1.welcomelib());
// =====================================================
//private property=> we use it to get better control of something
// class BankAccount {
//     private balance: number = 0;
//     // protected balance: number = 0;
  
//     deposit(amount: number) {
//       if (amount > 0) {
//         this.balance += amount;
//       }
//     }
  
//     withdraw(amount: number) {
//       if (amount > 0 && amount <= this.balance) {
//         this.balance -= amount;
//       }
//     }
  
//     getBalance() {
//       return this.balance;
//     }
//   }//like here in this example if we left balnce public...........
//   class Bankaccount1 extends BankAccount{
//     bankname="alflah"
//     getbalance(){
//        return this.balance
//     }
//   }// if we bankaccount class to protected error will gone


//================ Getter & Setter
class Temperature {
    private _celsius: number = 0;
  
    // Setter for setting the temperature in Celsius
    set celsius(value: number) {
      // if (value < -273.15) {
      //   throw new Error("Temperature cannot be below absolute zero.");
      // }
      this._celsius = value;
    }
  
    // Getter for retrieving the temperature in Celsius
    get celsius(): number {
      return this._celsius;
    }
  
    // Getter for retrieving the temperature in Fahrenheit
    get fahrenheit(): number {
      return (this._celsius * 9/5) + 32;
    }
  }
  
  const temp = new Temperature();
  temp.celsius = -274; // Setting the temperature in Celsius using the setter.
  console.log(temp.celsius); // Accessing the temperature in Celsius using the getter.
  console.log(temp.fahrenheit); // Calculating and retrieving the temperature in Fahrenheit.




  
  
