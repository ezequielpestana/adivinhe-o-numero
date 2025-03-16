function verificarpalpite() {
    palpite = parseInt(document.getElementById('inputnumero').value);
        numeroaleatorio = Math.floor(Math.random() *5) + 1;
        resultado = document.getElementById('resultado');

        if(palpite <= 5 && palpite >= 1){
            if( numeroaleatorio === palpite){
                resultado.style.display = "block";
                resultado.style.color = "green";
                resultado.innerHTML = `Parabéns, você acertou! O número é ${numeroaleatorio}`;


                setTimeout(()=>{resultado.style.display = "none";},4000);
                
            } else {
                resultado.style.display = "block";
                resultado.style.color = "red";
                resultado.innerHTML = ` Você ERROU! O número era = ${numeroaleatorio}`;

                setTimeout(()=>{resultado.style.display= "none";},4000);
        }

        }else{
            alert('Isira um numero entre 1 e 5');
        }


}