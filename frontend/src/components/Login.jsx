import{ useState } from 'react';
import Form from './Form.jsx';
import TextField from './TextField.jsx';
import { login } from '../services/loginService.js';
//import { useModal } from './Modal.jsx';
//import { useSnackbar } from './Snackbar.jsx'

export default function Login(){
    //openModal('ingresando');
    const [username, setUsername] = useState('1');
    const [password, setPassword] = useState('2');
   // const { open: openModal } = useModal();    
    //const snackbar = useSnackbar();

    async function submit(){
        const token = await login(username, password);
        if (token) {
            snackbar.enqueue('Ingreso OK', (variant: 'success', timeout: 6000));
        }else {
            snactbar.enqueue('Error de ingreso', {variant: 'Error', timeout: 6000});
        }

    }

    return (
        <Form
            title="Iniciar sesión"
            action={submit}
        >
            <TextField
                label="Nombre de usuario"
                name="username"
                required={true}
                value={username}
                onChange={e => setUsername(e.target.value)}
                
            />
            <TextField
                label="Contraseña"
                name="password"
                type="password"
                required={true}
                value={password}
                onChange={e => setPassword(e.target.value)}     
            />    
        </Form>
    )
}