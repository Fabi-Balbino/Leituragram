const foto = document.getElementById('foto_usuario');
const nome = document.getElementById('nome_usuario');
const comentario = document.getElementById('comentario');
const form = document.getElementById('formulario');
const comentar = document.getElementById('comentar');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let span = document.createElement('span');
    let p = document.createElement('p');
    

    span.innerHTML = `${nome.value}:`;
    p.innerHTML = `${comentario.value}`;

    comentar.appendChild(span);
    comentar.appendChild(p);
    
    comentario.value = '';
    comentario.focus();
});