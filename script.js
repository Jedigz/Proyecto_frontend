console.log("Loading Javascript.......")


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
            alert("Creación exitosa de contacto !!");
        }else{
            alert("Error en la creación de contacto !!");
        }
    });
    return true;
}

//  function getBooks(){


//     let url = "http://localhost:8000/api/books";
//     let params = {
//     method: "GET",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     }

//     fetch(url,params).then((response) =>{
//         console.log(response);
//         console.log(response.json());
//     });



    
//     url = "https://api.agify.io/?name=meelad";
//     params = {      
//     method: "GET",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     }

//     fetch(url,params).then((response) =>{
//         console.log(response);
//         console.log(response.json());
//     });


//     return true;
// }