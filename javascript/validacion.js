var nombreError = document.getElementById('nombre-error');
var apellidoError = document.getElementById('apellido-error');
var telefonoError = document.getElementById('telefono-error');
var emailError = document.getElementById('email-error');
var consultaError = document.getElementById('consulta-error');
var submitError = document.getElementById('submit-error');


function validacionNombre(){
    var nombre = document.getElementById('contact-nombre').value;

    if (nombre.length == 0){
        nombreError.innerHTML = 'Nombre es requerido';
        return false;
    }
    if (!nombre.match(/^[a-zA-ZÀ-ÿ\s]{1,40}$/,)){
        nombreError.innerHTML = 'Escribe tu nombre';
        return false;
    }
    nombreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validacionApellido(){
    var apellido = document.getElementById('contact-apellido').value;

    if (apellido.length == 0){
        apellidoError.innerHTML = 'Apellido es requerido';
        return false;
    }
    if (!apellido.match(/^[a-zA-ZÀ-ÿ\s]{1,40}$/,)){
        apellidoError.innerHTML = 'Escribe tu apellido';
        return false;
    }
    apellidoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validacionEmail(){
    var email = document.getElementById('contact-email').value;

    if (email.length == 0){
        emailError.innerHTML = 'Email es requerido';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,)){
        emailError.innerHTML = 'Email invalido';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validacionTelefono(){
    var telefono = document.getElementById('contact-telefono').value;

    if (telefono.length == 0){
        telefonoError.innerHTML = 'Teléfono es requerido';
        return false;
    }
    if (telefono.length !== 10){
        telefonoError.innerHTML = ' Al menos 10 digitos';
        return false;
    }
    if (!telefono.match(/^[0-9]{10}$/)){
        telefonoError.innerHTML = 'Escribe tu teléfono';
        return false;
    }
    telefonoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validacionConsulta(){
    var consulta = document.getElementById('contact-consulta').value;
    var requerido = 30;
    var left = requerido - consulta.length;

    if (left>0){
        consultaError.innerHTML = left + '  caracteres requeridos';
        return false;
    }
    consultaError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validacionForm(){
    if (!validacionNombre() || !validacionApellido() || !validacionEmail() || !validacionTelefono() || !validacionConsulta()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Por favor complete todos lo campos para enviar';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}