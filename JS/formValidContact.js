document.getElementById('form').addEventListener('submit', function(event) {
    let isValid = true;
    let errorMessage = '';

    // Limpiar mensajes de error previos
    const campos = document.querySelectorAll('.campoStd');
    campos.forEach(campo => campo.classList.remove('error'));

    // Validar Nombre y Apellido
    const firstname = document.getElementById('firstname');
    const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (firstname.value.trim() === ''){ //metodo trim() elimina espacios en blanco
        isValid = false;
        firstname.classList.add('error');
        errorMessage += 'Por favor, ingrese su nombre y apellido.\n';
    } else if (!namePattern.test(firstname.value.trim())){
        isValid = false;
        firstname.classList.add('error');
        errorMessage += 'El nombre y apellido solo puede contener letras y espacios.\n';
    }

   // Validar Teléfono
   const telefono = document.getElementById('telefono');
   const telefonoPattern = /^\d+$/;
   if (!telefonoPattern.test(telefono.value.trim())) {
       isValid = false;
       telefono.classList.add('error');
       errorMessage += 'Por favor, ingrese un número de teléfono válido (solo números).\n';
   }

    // Validar Email
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        email.classList.add('error');
        errorMessage += 'Por favor, ingrese un correo electrónico válido.\n';
    }

    // Validar Comentario
    const comentario = document.getElementById('comentario');
    if (comentario.value.trim() === '' || comentario.value.trim() === 'Ingrese su consulta o comentario') {
        isValid = false;
        comentario.classList.add('error');
        errorMessage += 'Por favor, ingrese un comentario.\n';
    }

    if (!isValid) {
        event.preventDefault(); // Evita que el formulario se envíe
        alert(errorMessage); // Muestra el mensaje de error específico
    } else {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        // Mostrar mensaje de agradecimiento
        alert('¡Gracias por tu comentario! Nos contactaremos a la brevedad.');

        // Opcional: Resetear el formulario después de enviarlo correctamente
        document.getElementById('form').reset();
    }
});