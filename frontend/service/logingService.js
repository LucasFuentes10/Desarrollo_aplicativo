import { postJson } from '../lisbs/api.js'
export async function login(username, password) {
    return await postJson('/login', {username, password});
}