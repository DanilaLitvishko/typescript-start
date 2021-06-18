class Boat {
    @testDecorator
    color:string = 'red';

    @testDecorator
    get formattedColor():string{
        return `this boats color is ${this.color}`
    }
    
    @logError('Oops')
    pilot(@parameterDecorator speed:string):void{

        if(speed === 'fast'){
            console.log('switch')
        }else{
            console.log('nothing')
        }
    }
}

function classDecorator(constructor: Function){
    
}  

function parameterDecorator(target: any, key: string, index:number){
    console.log(key, index)
}

function testDecorator(target: any, key:string){
    console.log(key)
}

function logError(errorMessage:string)
{
    return function(target: any, key:string, desc: PropertyDescriptor): void{
        const method = desc.value;

        desc.value = function(){
            try{
                method()
            }catch(e){
                console.log(errorMessage)
            }
        }
    }
}