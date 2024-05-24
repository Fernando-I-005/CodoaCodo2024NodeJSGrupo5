
  document.querySelector('form').addEventListener('submit', function(event) {
    
    const firstname = document.querySelector('input[name="firstname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const birthdate = document.querySelector('input[name="birthdate"]').value;

    // Validación de nombre y apellido (solo letras)
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
      alert('Por favor, ingrese solo letras en los campos de nombre y apellido.')
      event.preventDefault(); // Evita que el formulario se envíe
      return;
    }
    // Validación de fecha de nacimiento (mayor de 18 años)
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    const age = today.getFullYear() - birthdateDate.getFullYear();
    const month = today.getMonth() - birthdateDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }
    if (age < 18) {
      alert('Debes ser mayor de 18 años para suscribirte.');
      event.preventDefault(); // Evita que el formulario se envíe
      return;
    }
    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      event.preventDefault(); // Evita que el formulario se envíe
      return;
    }
    // Validación de número de teléfono (solo números)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      alert('Por favor, ingrese solo números en el campo de número de teléfono.');
      event.preventDefault(); // Evita que el formulario se envíe
      return;
    }

    // Mostrar mensaje de agradecimiento
    alert('¡Gracias por suscribirte, ' + firstname + ' ' + lastname + '!');

  });

