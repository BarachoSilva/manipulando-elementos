const tituloElemento = document.getElementById("titulo");
console.log(tituloElemento);
const ulElemento = document.querySelector('ul');
console.log(ulElemento);
const linkElemento = document.getElementById('link');
console.log(linkElemento);
const olElemento = document.getElementById('lista-ordenada');
console.log(olElemento);

tituloElemento.innerText = 'Título da Página';
linkElemento.innerText = 'Link para Proz Educação';

ulElemento.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

olElemento.innerHTML = '<li><a href="https://site1.com">Link 1</a></li><li><a href="https://site2.com">Link 2</a></li><li><a href="https://site3.com">Link 3</a></li>';
