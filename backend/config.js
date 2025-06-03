/*
cree un archivo local llamado config.local.js donde coloque los valores 
de config.js
*/ 

import configLocal from './config.local.js';

var config ={
    port: 3000,
    ...configLocal,
}

export default config; 