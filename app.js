const main = document.getElementById('main');


fetch("https://api.thecatapi.com/v1/breeds")
.then( respuesta => respuesta.json())
.then(( data ) => printData(data))
.catch((error) => console.log(error))


const printData = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        const nombre = arr[i].name;
        const imagen = arr[i].image.url;
        const origen = arr[i].origin;
        const duracionVida = arr[i].life_span;
      str = str + `
      <div class= "card">
      <div class = "image">
      <figure>
        <img src="${imagen}" alt="${nombre}" width="250" >
      </figure>
      </div>
      <div class = "contenido"
      <p>Nombre: ${nombre}</p>
      <p>Origen: ${origen}
      <p>Vida: ${duracionVida}</p>
      </div>
      </div>

      ` 
    }
    main.innerHTML = str
}