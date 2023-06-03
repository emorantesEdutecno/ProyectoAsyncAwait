const a=()=>{
    return new Promise(resolve =>{
        setTimeout( ()=>{
            resolve('Se resolvió la promesa a después de 3 segundos');
        } , 3000);
    });
};

const b=()=>{
    return new Promise(resolve =>{
        setTimeout( ()=>{
            resolve('Se resolvió la promesa b después de 1 segundos');
        } , 1000);
    });
};


const llamadaAsincrona = async ()=>{
    console.log('Iniciando llamadaAsincrona');
    const resultado1 = await a();
    console.log(resultado1);
    const resultado2 = await b();
    console.log(resultado2);
    console.log('Fin llamadaAsincrona');
};

const asignarEventos = ()=>{
    let elBoton = document.getElementById('btnAsync');
    elBoton.addEventListener('click', llamadaAsincrona);
};