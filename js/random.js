
const loadRandomUser = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayRandomUser(data.results))
}

const displayRandomUser = (data) => {
    const userContainer = document.getElementById('user-container');

    for (let user of data) {
        const div = document.createElement('div');
        div.classList.add('user-style');
        div.innerHTML = `
            <img src="${user.picture.thumbnail}">
            <h4>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4>
            <p>Location: ${user.location.country}, City: ${user.location.city}</p>
            <h5>Gender: ${user.gender}</h5>
            <h6>Age: ${user.dob.age}</h6>
            <p>Email: ${user.email}</p>
        `
        userContainer.appendChild(div)
        console.log(div)
    }
}

loadRandomUser()