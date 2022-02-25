 
 //Estou pegando a Lista de elementos .
 var  campos = [
     //Selecionando elementos do DOM para criar uma lista .
     document.querySelector('#data'),
     document.querySelector('#quantidade'),
     document.querySelector('#valor')
 ];
 

 console.log(campos)
 var tBody = document.querySelector('table tbody')
 //estou selecionando o formulario via DOM e fazendo uma função de callBack para chamar um evento criando uma Tabela
 document.querySelector('.form').addEventListener('submit', (event)=> {
     event.preventDefault();

     var tr = document.createElement('tr');
     campos.map((campo)=>{
         var td = document.createElement('td');
         td.textContent = campo.value;   //Inserindo Valor na minha TD
         tr.appendChild(td); //adicionando um filho para minha TR via DOM
     });

     var tdVolume = document.createElement('td');
     tdVolume.textContent= campos[1].value * campos[2].value;
     
     tr.appendChild(tdVolume);
     tBody.appendChild(tr);

     campos[0].value = '';
     campos[1].value = 1;
     campos[2].value = 0;
     campos[0].focus();
 })