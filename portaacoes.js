var lista1 = document.getElementById("lista1");
var caixa2 = document.getElementById("caixa2");
var lista = document.getElementById("lista");
var numale = (Math.random() * 50000) + 1000;
document.getElementById("re").addEventListener('click', (event) =>{
const op = Math.random();
var op1 = Math.floor(op * 8000);
document.getElementById("senharand").textContent = op1;
const senpeg = document.createElement('li');
const textli = document.createTextNode(op1);
senpeg.appendChild(textli);
lista.appendChild(senpeg);  
if(lista.childElementCount > 3){
    stop();
} 

if(!lista1.childElementCount){
setTimeout(function(){colocarsenha()}, 6000);
apagar1();
} 
async function caixa1proxsenha(){
    return new Promise(resolve => setTimeout(resolve, numale));
  }
if(apagar1() == true){
    caixa1proxsenha(numale).then(() =>{
    var li2 =document.createElement('li');
    var text1 = document.createTextNode(lista.children[0].textContent);
    li2.appendChild(text1);
    lista1.appendChild(li2);
    });
}
if(lista1.hasChildNodes()){
   setTimeout(function(){ colocarsenha1()}, 6000);
}
var numale1 = Math.floor(Math.random() * 60000);
var numale2 = numale + numale1;
setTimeout(function(){pronto()}, numale2);



//onde os números aleatórios são colocados
var textli1 = document.createTextNode(lista.children[0].textContent);
var textli2 = document.createTextNode(lista.children[1].textContent);
setTimeout(function(){avaliar()}, numale + 4000);
var receber = document.getElementById("recebimentos");
function pronto(){ //problema de puxar os elementos do 'senharand', deve só puxar os elementos da lista1 e caixa2
const senpeg1 = document.createElement('li');
var op5 = textli1.textContent;
const espera = document.createTextNode(op5);
senpeg1.appendChild(espera);
receber.appendChild(senpeg1);
receber.style="font-size:70px";
receber.style="border-bottom:3px";
}
    function avaliar(){
    var imgsrc = document.getElementById('grade');
    var emojis_grade = Math.floor(Math.random() * 3);
    if(emojis_grade == 0){
    var dislike = 'imgs/naogostou.png';
    imgsrc.setAttribute('src', dislike);
    imgsrc.style.width="50px";
    var ran = document.getElementById("lista").innerHTML;
    var mensagem = "Usuario: " + op1;    
    document.getElementById("nota_p").textContent = mensagem;
    var nao = 0;
    nao += 1;
    document.getElementById("downvote").textContent = nao;
    } else if(emojis_grade == 1){
    var normal = 'imgs/maisoumenos.png';
    imgsrc.setAttribute('src', normal);
    imgsrc.style.width="50px";
    var ran = document.getElementById("lista").innerHTML;
    var mensagem1 = "Usuario: " + op1;    
    document.getElementById("nota_p").textContent = mensagem1;
    var ok = 0;
    ok += 1;
    document.getElementById("neutro").innerHTML = ok;
    } else if(emojis_grade == 2){
    var like = '/imgs/gostou.png';
    imgsrc.setAttribute('src', like);
    imgsrc.style.width="50px";
     var mensagem2 = "Usuario: " + op1;    
    document.getElementById('nota_p').textContent = mensagem2;
    var sim = 0;
    sim += 1;
    document.getElementById("upvote").innerHTML = sim;
    }
    setTimeout(function(){imgsrc.style.display="none";
                          document.getElementById("nota_p").style.display="none";
    },2000);
}
function colocarsenha1(){
    const li1 = document.createElement('li');
    li1.appendChild(textli2);
    caixa2.appendChild(li1);
}
function colocarsenha(){
   var li0 = document.createElement('li');
    li0.appendChild(textli1);
    lista1.appendChild(li0);
    if(lista1.childElementCount > 1){
    limitarchildren1();
    }
    lista.removeChild(lista.firstElementChild); 
}
})
function limitarchildren(){
 while(lista1.lastChild){
 lista1.remove(lista1.lastChild);
 }
}
function limitarchildren1(){
 lista1.lastElementChild.style.display="none";
}

function stop(){
    document.getElementById("re").disabled = true;
}

            function apagar1(){
                setTimeout(function(){apagar()}, numale);}
                function apagar(){
                while (lista1.lastChild){
                lista1.removeChild(lista1.lastElementChild);}}
            