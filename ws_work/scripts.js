document.addEventListener("DOMContentLoaded", function () {
    const postsList = document.getElementById("posts-list");

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const li = document.createElement("li");
                const h2 = document.createElement("h2");
                const p = document.createElement("p");

                h2.textContent = post.title;
                p.textContent = post.body;

                li.appendChild(h2);
                li.appendChild(p);
                postsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });

    const imagesContainer = document.getElementById('images-container');
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.thumbnailUrl;
                img.alt = photo.title;

                const title = document.createElement('p');
                title.textContent = photo.title;

                const imageWrapper = document.createElement('div');
                imageWrapper.appendChild(img);
                imageWrapper.appendChild(title);

                imagesContainer.appendChild(imageWrapper);
            });
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });

    const todosList = document.getElementById("todos-list");
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response => response.json())
        .then(data => {
            data.forEach(todo => {
                const listItem = document.createElement("li");
                listItem.textContent = todo.title;
                todosList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
});

// Массив пользователей
let users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    let foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
        alert('Успешная авторизация!');
    } else {
        document.getElementById('error-message').innerText = 'Неверное имя пользователя или пароль.';
    }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('reg-username').value;
    let password = document.getElementById('reg-password').value;
    console.log("Введенные данные:", { username: username, password: password }); // Выводим данные в консоль
    let existingUser = users.find(user => user.username === username);
    if (existingUser) {
        document.getElementById('error-message').innerText = 'Пользователь с таким именем уже существует.';
    } else {
        users.push({ username: username, password: password });
        alert('Пользователь успешно зарегистрирован!');
        document.getElementById('reg-username').value = '';
        document.getElementById('reg-password').value = '';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const albumsList = document.getElementById("albums-list");

    fetch('https://jsonplaceholder.typicode.com/users/1/albums')
        .then(response => response.json())
        .then(data => {
            data.forEach(album => {
                const listItem = document.createElement("li");
                listItem.textContent = album.title;
                albumsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching albums:', error);
        });
});

function showContent(contentId) {
    // Скрыть все содержимое
    var allContent = document.querySelectorAll('#app > div');
    allContent.forEach(function(element) {
        element.style.display = 'none';
    });

    // Показать только выбранное содержимое
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

