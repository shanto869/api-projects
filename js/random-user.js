
const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayRandomUser(data.results))
}

const displayRandomUser = (users) => {
    const userContainer = document.getElementById('user-container')

    for (let user of users) {
        const div = document.createElement('div');
        div.classList.add('user-style');
        userContainer.appendChild(div);

        div.innerHTML = `
            <img src="${user.picture.thumbnail}">
            <h5>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <p>Location: ${user.location.city}, ${user.location.country} </p>
            <h6>Gender: ${user.gender}</h6>
            <p>Age: ${user.dob.age}</p>
            <p>Email: ${user.email}</p>
        `

        console.log(user)
    }
}

loadRandomUser()