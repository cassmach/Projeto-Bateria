
        // Aqui eu adiciono um evento listener para pegar a tecla

document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase() );
});

document.querySelector ('.composer button').addEventListener('click', ()=> {
    // Selecione o input e coloco o .value para pegar oque ele clica
    let song = document.querySelector('#input').value; 
    //se for diferente de vazio
    if(song !== '') {
        let songArray = song.split(''); // Gerar um array a cada letra
        playComposition(songArray);

    }
})


function playSound (sound) {
    // Abaixo ele seleciou o audio baseano na tecla digitada
    // Foi craido id nos audio com nome key para funcionar a função
    let audioElement = document.querySelector(`#s_${sound}`);

    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

       if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
       } 
       // Adicionando uma Class ao elemento
       if (keyElement) {
        keyElement.classList.add('active')   
        
        // Criando um tempo para remover a clsse  active

        setTimeout (()=>{
            keyElement.classList.remove('active') 
        }, 300)
          
        
       }
}


function playComposition(songArray) {
 // É criado o wait para ter uma pausa entre um som para o proximo
    let wait = 0;


    for(let songItem of songArray){ // Fazer um loop para pegar os item do song 
        setTimeout(()=>{
            playSound(`key${songItem}`) // Ação para tocar oque pegou no loop
        }, wait);  
        
        wait += 250; // Aqui vamos adicionando o 250 a cada som

        
       
    } 
}