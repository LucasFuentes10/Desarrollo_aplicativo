import js from '@eslint/js';
import global from 'global';
export default [
    {
        files: ['**/*.js'],
        languageOptions:{
       
            globals: globals.builtin, 
        },
        rules:{
            ...js.configs.recommended.rules,
            'no-unused-vars': 'warn',

        }
    }
];