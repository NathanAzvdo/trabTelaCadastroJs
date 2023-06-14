let cont =0;

function calc(){
    let lucro = document.getElementById('lucro').value;
    let custo = document.getElementById('custo').value;
    if(lucro!=="" && custo!==""){

        valorF = parseFloat(custo)+((parseFloat(custo)/100)*parseFloat(lucro));
        let venda = document.getElementById('venda');
        
        venda.value = "R$"+valorF.toFixed(2);
    }
    else if(custo==""){
        venda.value = "";
    }
    else if(lucro=="" && custo!==""){
        venda.value = "R$"+custo;
    }
}



function color(){
    var body = document.body;
    var fiel = document.getElementById('field');
    var leg = document.getElementById('leg');
    var sub = document.getElementById('submit');
    var iUser = document.getElementsByClassName("inputUser");
    var iLabel = document.getElementsByClassName("labelInput");
    var btnColor = document.getElementById("btnColor");
    body.classList.toggle("bodyDark");
    fiel.classList.toggle("fieldsetDark");
    leg.classList.toggle("legendDark");
    sub.classList.toggle("submitDark");
    for(var i = 0; i<iUser.length; i++){
        iUser[i].classList.toggle("inputUserDark");
    }
    for(var i = 0; i<iLabel.length; i++){
        iLabel[i].classList.toggle("labelInputDark");
    }
    cont++;
    if(cont%2==1){
        btnColor.innerText="Modo Claro"
    }
    else{
        btnColor.innerText="Modo Escuro"
    }
}

const formulario = document.getElementById('formulario');

// Adiciona o evento de envio ao formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    
  const divDestino = document.getElementById('produtosCad');
  const produto = formulario.elements['produto'].value;
  const preco = formulario.elements['venda'].value;
  const Quantidade = formulario.elements['Quantidade'].value;
  const marca = document.querySelector('input[name="Marca"]:checked').value;


  divDestino.innerHTML = `Produto: ${produto}<br>Valor: ${preco}<br>Quantidade: ${Quantidade}<br>Marca: ${marca}`;
});
function produtos(){
    const divDestino = document.getElementById('produtosCad');
    divDestino.style.display="block";
}
