const profileHTMLelement = document.querySelector("#profile");

const apiUser = () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .then(data => {
        const pictureHTMLelement = document.createElement('img');
        pictureHTMLelement.src = data.results[0].picture.large;
        pictureHTMLelement.setAttribute('alt', 'Photographie de l\'utilisateur');
        pictureHTMLelement.style.width = '60%';
        pictureHTMLelement.style.border = "2px solid grey";
        profileHTMLelement.append(pictureHTMLelement);
        

        const fullNameHTMLelement = document.createElement('p');
        fullNameHTMLelement.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;
        profileHTMLelement.append(fullNameHTMLelement);

        const addressHTMLelement = document.createElement('p');
        addressHTMLelement.innerText = `${data.results[0].location.street.number}, ${data.results[0].location.street.name}, ${data.results[0].location.postcode} ${data.results[0].location.city}, ${data.results[0].location.country}`;
        profileHTMLelement.append(addressHTMLelement);  

        const emailHTMLelement = document.createElement('p');
        emailHTMLelement.innerText =data.results[0].email;
        profileHTMLelement.append(emailHTMLelement);

        const phoneHTMLelement = document.createElement("p");
        phoneHTMLelement.innerText = data.results[0].phone;
        profileHTMLelement.append(phoneHTMLelement);
    })
    .catch((err) =>{
        console.error(`Cette erreur est survenue : ${err}`);
        console.log(
            `Nom de l'erreur : ${err.name} 
            Message de l'erreur : ${err.message}`
        );
    })
};

apiUser();