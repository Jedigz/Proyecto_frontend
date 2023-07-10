function saveContactos(){

    let nameContactos = document.getElementById("name");
    let lastNameContactos = document.getElementById("lastName");
    let countryContactos = document.getElementById("country");
    let emailContactos = document.getElementById("email");


    let contactos = {
        name: nameContactos.value,
        lastName: lastNameContactos.value,
        email: emailContactos.value,
        country: countryContactos.value
    }

    console.log(contactos);

    let url = "http://localhost:8000/api/contactos";
    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(contactos),
    }

    fetch(url, params).then(response =>{
        console.log(response);

        if(response.status == 201){
            alert("Formulario enviado con exito");
        }else{
            alert("Error en el envio del formuario");
        }
    });
    return true;
}