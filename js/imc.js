const bCalcular=document.querySelector("#btnCalcular");
const bLimpar = document.querySelector("#btnLimpar");

bCalcular.addEventListener("click",()=>{
   var p = parseFloat(document.querySelector("#txtPeso").value);
   var a = parseFloat(document.querySelector("#txtAltura").value);
   calcImc(p,a);

});

function calcImc(pP, pA){
    var imc= pP/(pA**2);
    document.querySelector("#txtResultado").value=imc;
}

    bLimpar.addEventListener("click",()=>{
        document.querySelector("#txtPeso").value='';
        document.querySelector("#txtAltura").value='';
        document.querySelector("#txtResultado").value='';
        document.querySelector("#txtPeso").focus();
    });