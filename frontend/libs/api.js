const urlBase = 'http://localhost:3000/api';

export async function fetchApi(service, options){
   options ??= {}; 

    if (options.body){
        if (typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body);
        }

        options.headers ??= {};
        options.headers.ContenType ||= 'application/json';
    }
    if (options.json){
        options.headers ??= {};
        options.headers.Accept ||= 'application/json';
    }

    let res = await  fetch('$(urlBase}${service}', options);

    if(!res.ok) {
        throw new Error("El resultado no esta Ok");
    }

    if (options.json  res.headers.ContenType.starWith('application/json')) {
        res = await res.json();
    }
    return res;
}

export async function post(service, body, options) {
    return await fetchApi(service, {... options, body, method: 'POST'});
}

export async function postJson (service, body, options) {
    return await post(service, body, {...options, json: true});
}