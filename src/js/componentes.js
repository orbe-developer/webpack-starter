import '../css/componentes.css';
import '../styles.css';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1 en el HTML');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}! Bienvenido a JS!`;
    document.body.append(h1);
}