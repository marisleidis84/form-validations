let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let validateCardNumber = /^[0-9]{13,16}/;
    let validateCVC = /^[0-9]{1,4}$/;
    let validateAmount = /^[0-9]{4,9}$/;
    let validateName = /^[a-z-zA-_\.]{2,25}$/;
    let validateLastname = /^[a-z-zA-_\.]{2,25}$/;
    let validateCity = /^[a-z-zA-_\.]{2,25}$/;
    let validatePostalCode = /^[0-9]{9}$/;
    let validateMessage = /^[a-z-zA-_\.]{0,200}$/;

    //ocultando la alerta
    let x = document.getElementById("ocultar_datos");
    if (!x.style.display === "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    
    //validacion del form
    if (!validateCardNumber.test(form.car_number.value)) {
        form.car_number.classList.add('is-invalid');
        form.car_number.style.background = "#E79796";
    }
    else {
        form.car_number.classList.remuve('is-invalid');
    }

    if (!validateCVC.test(form.cvc.value)) {
        form.cvc.classList.add('is-invalid');
        form.cvc.style.background = "#E79796";
    }
    else {
        form.cvc.classList.remuve('is-invalid');
    }

    if (!validateAmount.test(form.amount.value)) {
        form.amount.classList.add('is-invalid');
        form.amount.style.background = "#E79796";
    }
    else {
        form.amount.classList.remuve('is-invalid');
    }

    if (!validateName.test(form.name.value)) {
        form.name.classList.add('is-invalid');
        form.name.style.background = "#E79796";
    }
    else {
        form.name.classList.remuve('is-invalid');
    }

    if (!validateLastname.test(form.lastname.value)) {
        form.lastname.classList.add('is-invalid');
        form.lastname.style.background = "#E79796";
    }
    else {
        form.lastname.classList.remuve('is-invalid');
    }

    if (!validateCity.test(form.city.value)) {
        form.city.classList.add('is-invalid');
        form.city.style.background = "#E79796";
    }
    else {
        form.city.classList.remuve('is-invalid');
    }

    if (!validatePostalCode.test(form.postal_code.value)) {
        form.postal_code.classList.add('is-invalid');
        form.postal_code.style.background = "#E79796";
    }
    else {
        form.postal_code.classList.remuve('is-invalid');
    }

    if (!validateMessage.test(form.message.value)) {
        form.message.classList.add('is-invalid');
        form.message.style.background = '#E79796';
    }
    
    else {
        form.message.classList.remuve('is-invalid');
    }
});

