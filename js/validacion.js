function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
document.getElementById('regBtn').addEventListener('click', () => {
    let forms = document.getElementsByClassName('form-control');
    let pass1 = document.getElementById('password1');
    let pass2 = document.getElementById('password2');

    for (let form of forms) {
        if (form.value == "") {
            showAlertError();
            break;
        }    
    }
    if (pass1.value.length < 6 && pass2.value.length < 6) {
        showAlertError();
        return;
    }
    let byS = document.getElementById("termino").checked;
    if (byS == false) {
        showAlertError();
        return;
    }
    if (pass1.value != pass2.value) {
        showAlertError()
        return;
    }
else{
    showAlertSuccess()
    window.location.reload()
}
   
});




