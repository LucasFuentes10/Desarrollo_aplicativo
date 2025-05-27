export class InvalidArgumentException extends Error {
    constructor(){
        super('Argumentos Inválidos.');
        this.statusCode = 400;
    }
}