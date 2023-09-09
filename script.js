


function verificarSaldo() {
    if (saldoInicial >= 500) {
        jugar = true;
        mostrarMensaje.textContent = "Podes jugar! Tu saldo es de " + saldoInicial;
        console.log("El saldo inicial es: " + saldoInicial);
        localStorage.setItem('saldoInicial', saldoInicial);
        
    }

else if (saldoInicial < 500) {
        jugar= false;
        mostrarMensaje.textContent = "No podes jugar, tu saldo es menor a 500";
        
}

}



document.getElementById("redirect").addEventListener("click", function() {
    window.location.href = "ruleta.html";
    });

    document.getElementById("redirect2").addEventListener("click", function() {
        window.location.href = "blackjack.html";
    });

    document.getElementById("cargar").addEventListener("click", function() {
    saldoInicial = document.getElementById("saldoInicial").value;
    saldoInicial = parseInt(saldoInicial)
    verificarSaldo()
    });

    function mostrarSaldoEnIndex () {
        let saldoInicial = parseInt(localStorage.getItem('saldoInicial'))

        if (!isNaN(saldoInicial)) {
            document.getElementById('mostrarMensaje').textContent='Tu saldo es de ' + saldoInicial;

        }

    }

    window.addEventListener('load', mostrarSaldoEnIndex)





