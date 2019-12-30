

let userName = prompt("¿Quièn anda ahi?", "");

if (userName == 'Admin') {
    let pass = prompt("Password", "");
     if (pass == 'TheMaster')
     alert("Bienvenido");
} else if (pass == "" || pass == null) {
    alert('Cancelado');       
} else {
    alert('Contraseña incorrecta');
}

else if (userName == "" || userName == null) {
    alert('No te conozco');
}
