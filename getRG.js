const form = document.forms['form'];

form.addEventListener('submit',function(e) {
    e.preventDefault();
    var rg = form.querySelector('input[id="rg"]');
    rg = String(rg.value);
    if(rg.length != 8 || rg.match(/^[0-9]+$/) == null) {
        document.getElementById("f").innerHTML = 'Insira 8 dígitos';
        return(0);
    }
    var soma = 0;
    for(var j = 0; j < 8; j++) {
        soma += (j+2)*parseInt(rg[j]);
    }
    var digito = 11 - soma%11;
    if(digito == 10) digito = 'X';
    if(digito == 11) digito = 0;
    document.getElementById("f").innerHTML = rg.slice(0,2) +
        '.' + rg.slice(2,5) + '.' + rg.slice(5,8) +' - ' + String(digito);
})