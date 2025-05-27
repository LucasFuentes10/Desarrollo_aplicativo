export class InvalidCredentialsException extends Error {
    constructor(){
        super('Credenciales Inválidas.');
        this.statusCode = 403;
    }
}