 class ArrayOfSmth<T>{
     constructor(public collection: T[]){}

     get(index:number):T{
         return this.collection[index]
     }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(add: T[]){
    
}