const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const valdation = (data) => {
    let errors = {};

    if (!data.email) {
        errors.email1 = 'Email vacío';
    }else if (!regexEmail.test(data.email)) {
        errors.email2 = 'Email invalido';
    }else if(data.email.length > 36) {
        errors.email3 = 'Email debe tener menos de 36 caracteres';
    }


    if (!/\d/.test(data.password)) {
        errors.password1 = 'Password debe tener al menos un numero';
    }else if (data.password.length < 2 || data.password.length > 10) {
        errors.password2 = 'Password debe tener entre 2 y 10 caracteres';
    }

    return errors;
}

export default valdation;