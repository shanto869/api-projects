// load random users 
const loadRandomUsers = () => {
    const url = `https://randomuser.me/api/?results=100`
    fetch(url)
        .then(res => res.json())
        .then(data => displayRandomUsers(data.results))
}

// display random users
const displayRandomUsers = (users) => {
    const usersContainer = document.getElementById('users-container');

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-style');
        usersContainer.appendChild(userDiv);

        userDiv.innerHTML = `
            <img src="${user.picture.large}">
            <h5 class="mb-0">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <p class="mb-0">Location: ${user.location.city}, ${user.location.country}</p>
            <p class="mb-0">Email: ${user.email}</p>
            <p class="mb-0">Gender: ${user.gender}</p>
            <p class="mb-0">Age: ${user.dob.age}</p>
        `
        console.log(user)
    })
}



loadRandomUsers()