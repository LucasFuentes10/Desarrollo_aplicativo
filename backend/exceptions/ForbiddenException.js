export class ForbiddenException extends Error{
    constructor(){
        super('Acesso Negado.');
        this.status = 401;
    }
}