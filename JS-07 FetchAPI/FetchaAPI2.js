

fetch('https://fakestoreapi.com/products',{
    method:"POST",
    body:JSON.stringify(
        {
            title: 'Sopa Marucha habanero',
            price: 20.0,
            description: 'Deliciosa maruchan de habanero',
            image: 'https://media.justo.mx/products/041789001956.jpg',
            category: 'Sopas instantaneas'
        }
    )
})
    .then(res=>res.json())//Metodo para  la respuesta ()
    .then(json=>console.log(json))      

//codigo para agregar productos 

    fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info