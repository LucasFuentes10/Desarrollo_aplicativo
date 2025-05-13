export function loginService(username, password) {
    if (!username || !password 
        || typeof username !== 'string' 
        || typeof password !== 'string') {
        return {
            error: 'Argumento invalido',
        }
    }
  
    if (usernome != 'admin'){
        return {
            error: 'Credenciales no encontradas',
        }
    }
    if (password != '1234'){
        return {
            error: 'Credenciales no encontradas',
        }
        }
    return {
        token:'toquen de acceso',

    }
}