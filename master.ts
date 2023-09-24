class earth {
    water : boolean
    air : boolean

    constructor(w:boolean,a:boolean){

        this.water=w
        this.air=a
        
    }
       life(){
        console.log(`is there water on this planet${this.water} and air ${this.air}`);
        
       }
}

class moon extends earth{}
//================
class mars {
    air :boolean
    water : boolean 
    food : string

    constructor (a:boolean, w: boolean , food:string){
        this.air=a
        this.water=w
        this.food =food
    }
    life (){
        console.log(`is there water on this planet${this.water} and air ${this.air}`);
        
    }
}

let earth1 = new earth(true,true)
let moon1 =  new moon (false,true)
let mars1 = new mars(false,false,"nahi haa")

earth1.life()

earth1 = moon1

earth1 = mars1 ///both have same structure

//mars1 = earth1

// let earth2:earth = new moon(false,true)

// console.log(earth2);
//  earth2.life()
