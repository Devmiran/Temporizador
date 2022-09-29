document.getElementById('iniciar').addEventListener('click',()=>{

    const segundos= document.getElementById('tiempo').value;

    const tempori= document.getElementById('temporizador');
  
    function temporizador(segundos){
        console.log(segundos)
        if (segundos === 0){
            return tempori.value = 'FIN';
        }else{
            tempori.value=segundos
            return setTimeout(temporizador,1000,segundos-1)
        }
    }
    temporizador(segundos);
})

