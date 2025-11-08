var lista1 = document.getElementById("lista1");
var lista = document.getElementById("lista");
var li0 = document.getElementById('senhacaixa1');
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


function senhacaixa(){
return new Promise(resolve => {
        setTimeout(function(){
            colocarsenha(); 
            resolve();
            setTimeout(function(){pronto()}, numale2);
        }, 6000);
    });
}
function removerdafila(){
    setTimeout(function(){apagar()}, numale);
    lista.removeChild(lista.children[0]);
}
senhacaixa().then(removerdafila);

var numale1 = Math.floor(Math.random() * 60000);
var numale2 = numale + numale1;

//onde os números aleatórios são colocados
setTimeout(function(){avaliar()}, numale + 4000);
var receber = document.getElementById("recebimentos");
function pronto(){ //problema de puxar os elementos do 'senharand', deve só puxar os elementos da lista1 e caixa2
const senpeg1 = document.createElement('li');
var op5 = op1;
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
    var mensagem = "Usuario: " + op1;    
    document.getElementById("nota_p").textContent = mensagem;
    var nao = 0;
    nao += 1;
    document.getElementById("downvote").textContent = nao;
    } else if(emojis_grade == 1){
    var normal = 'imgs/maisoumenos.png';
    imgsrc.setAttribute('src', normal);
    imgsrc.style.width="50px";
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
function colocarsenha(){
    var p7 = lista.firstElementChild.textContent;
    li0.textContent = p7;
}
})

function stop(){
    document.getElementById("re").disabled = true;
}
                function apagar(){
                let voltaraonormal = "------";
                li0.textContent = voltaraonormal;}

