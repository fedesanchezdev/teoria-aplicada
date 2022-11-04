//https://www.youtube.com/watch?v=cuCJ1M0zlEw

function cargarMostrarImagenAleatoria(){
    let imagenes = [
        {
            src: 'https://unsplash.com/es/fotos/ChKVvRDbqew'
        },
        {
            src: 'https://unsplash.com/es/fotos/Hlo8ucqYL14'
        },
        {
            src: 'https://unsplash.com/es/fotos/HppavctO8Us'
        }
    ];

    let bufferImagenes = [];

    for (const e of imagenes) {
        let imagen = new Image();
        imagen.src = e.src;

        bufferImagenes.push(imagen)
    }

    let indiceImagenAleatoria = generarEnteroAleatorio(imagenes.length);
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];

    let nuevoElementoImagen = document.body.appendChild(imagenAleatoria);
}

function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);

}