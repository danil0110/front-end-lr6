class AJAX {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if (xhr.status == 200) {
                callback(xhr.response);
            } else {
                console.log(`Error! ${xhr.status}: ${xhr.statusText}`);
            }
        }
        xhr.send();
    }

    post(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onload = () => {
            if (xhr.status == 200) {
                callback(xhr.response);
            } else {
                console.log(`Error! ${xhr.status}: ${xhr.statusText}`);
            }
        }
        xhr.send();
    }
}

const renderPosts = posts => {
    let result = '';
    posts.forEach(item => {
        result += `
            <div class="post">
                <h1 class="post-title">
                    ${item.title}
                </h1>
                <p class="post-content">
                    ${item.content}
                </p>
            </div>
        `;
    });
    document.querySelector('#posts').innerHTML = result;
}

const myAjax = new AJAX();
myAjax.get('./db.json', (response) => {
    renderPosts(JSON.parse(response).posts);
});

// Fetch API
// const test = new Promise((resolve, reject) => {
//     console.log("Loading data...");
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// });

// test.then(() => {
//     console.log("Data has been loaded");
// });

// fetch('./db.json', {
//     method: 'POST',
// })
// .then(response => response.json())
// .then(data => renderPosts(data.posts));