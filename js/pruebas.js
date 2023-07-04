function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad', 'Validar ciudad no validó que haya una ciudad seleccionada'
    );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('123123123') === 'Este campo debe tener más de 50 caracteres', 'Validar Descripción regalo no validó que tenga al menos 50 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsdfasdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdgfsdfgsdfgsdfg') === 'Este campo debe tener menos de 200 caracteres', 'Validar Descripción regalo no validó que el campo tenga menos de 200 caracteres'
        );
}

probarValidarDescripcionRegalo();