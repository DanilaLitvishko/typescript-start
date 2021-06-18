import 'reflect-metadata'

const plain = {
    color:'red'
}

// Reflect.defineMetadata('note', 'hi there', plain)
// Reflect.defineMetadata('height', 10, plain)

// const note = Reflect.getMetadata('note', plain)
// const height = Reflect.getMetadata('height', plain)

Reflect.defineMetadata('note', 'hi there', plain, 'color')